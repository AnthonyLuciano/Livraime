package Livraime.Unp.Livraime.servico;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Livraime.Unp.Livraime.exceptions.BadRequestException;
import Livraime.Unp.Livraime.exceptions.ConflictException;
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

        String codigoVerificacao = String.format("%06d", new Random().nextInt(999999));
        user.setCodigoVerificacao(codigoVerificacao);

        user.setSenha(passwordEncoder.encode(user.getSenha()));

        servicoEmail.enviarCodigoVerificacao(user.getEmail(), codigoVerificacao);

        user.setEmailVerificado(false);
        return repository.save(user);
    }
}
