package Livraime.Unp.Livraime.servico;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Livraime.Unp.Livraime.controller.dto.request.ConfirmEmailRequestDTO;
import Livraime.Unp.Livraime.exceptions.BadRequestException;
import Livraime.Unp.Livraime.exceptions.ConflictException;
import Livraime.Unp.Livraime.exceptions.EmailNotVerifiedException;
import Livraime.Unp.Livraime.exceptions.ResourceNotFoundException;
import Livraime.Unp.Livraime.exceptions.UnauthorizedException;
import Livraime.Unp.Livraime.modelo.Usuario;
import Livraime.Unp.Livraime.repositorio.UsuarioRepository;

@Service
public class UserService {
    @Autowired
    UsuarioRepository repository;

    @Autowired
    private ServicoEmail servicoEmail;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario getById(int id) {
        return repository.findById(id).orElse(null);
    }

    public List<Usuario> getAll() {
        return repository.findAll();
    }

    public Usuario createUser(Usuario user) throws Exception {
        if (user == null)
            throw new BadRequestException("Usuário indefinido.");

        if (repository.findByEmail(user.getEmail()).isPresent())
            throw new ConflictException("Não foi possível prosseguir com o cadastro, pois email já sendo utilizado.");

        // Verificar se cpf está em uso ou não
        if (repository.findByCpf(user.getCpf()).isPresent())
            throw new ConflictException("Não foi possível prosseguir com o cadastro, pois CPF já está sendo utilizado.");

        String codigoVerificacao = String.format("%06d", new Random().nextInt(999999));
        user.setCodigoVerificacao(codigoVerificacao);

        user.setSenha(passwordEncoder.encode(user.getSenha()));

        servicoEmail.enviarCodigoVerificacao(user.getEmail(), codigoVerificacao);

        user.setEmailVerificado(false);
        return repository.save(user);
    }

    public Usuario loginUser(String email, String senha) {
        Optional<Usuario> usuarioOpt = repository.findByEmail(email);

        if (usuarioOpt.isEmpty() || !passwordEncoder.matches(senha, usuarioOpt.get().getSenha()))
            throw new UnauthorizedException("E-mail ou senha inválidos.");

        Usuario usuario = usuarioOpt.get();

        if (!usuario.isEmailVerificado())
            throw new EmailNotVerifiedException();

        if (!usuario.isAtivo())
            throw new BadRequestException("Conta inativa. Contate o suporte.");

        return usuario;
    }

    public boolean validateCode(ConfirmEmailRequestDTO request) {
        Optional<Usuario> usuarioOpt = repository.findByEmail(request.email());
        if (!usuarioOpt.isPresent())
            throw new ResourceNotFoundException("Usuário não encontrado.");

        if (!request.code().equals(usuarioOpt.get().getCodigoVerificacao()))
            return false;

        Usuario usuario = usuarioOpt.get();
        usuario.setEmailVerificado(true);
        usuario.setCodigoVerificacao(null);
        repository.save(usuario);
        return true;
    }

    public void resendCodeToEmail(String email) {
        Optional<Usuario> usuarioOpt = repository.findByEmail(email);
        if (!usuarioOpt.isPresent())
            throw new ResourceNotFoundException("Usuário não encontrado.");

        Usuario usuario = usuarioOpt.get();
        String novoCodigo = String.format("%06d", new Random().nextInt(999999));
        usuario.setCodigoVerificacao(novoCodigo);
        repository.save(usuario);
        servicoEmail.enviarCodigoVerificacao(usuario.getEmail(), novoCodigo);
    }
}
