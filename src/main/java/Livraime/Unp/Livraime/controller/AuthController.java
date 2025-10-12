package Livraime.Unp.Livraime.controller;

import Livraime.Unp.Livraime.modelo.usuario;
import Livraime.Unp.Livraime.repositorio.UsuarioRepository;
import Livraime.Unp.Livraime.servico.ServicoEmail;
import Livraime.Unp.Livraime.dto.LoginRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
@Tag(name = "auth", description = "Autenticação e cadastro de usuários")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ServicoEmail servicoEmail;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/cadastro")
    @Operation(summary = "Cadastrar novo usuário")
    public ResponseEntity<?> cadastrar(@RequestBody usuario novoUsuario) {
        if (usuarioRepository.findByEmail(novoUsuario.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("E-mail já cadastrado.");
        }
        String codigo = String.format("%06d", new Random().nextInt(999999));
        novoUsuario.setSenha(passwordEncoder.encode(novoUsuario.getSenha()));
        novoUsuario.setEmailVerificado(false);
        novoUsuario.setCodigoVerificacao(codigo);
        novoUsuario.setAtivo(true);
        usuarioRepository.save(novoUsuario);
        servicoEmail.enviarCodigoVerificacao(novoUsuario.getEmail(), codigo);
        return ResponseEntity.ok("Usuário cadastrado. Verifique seu e-mail para confirmar.");
    }

    @PostMapping("/login")
    @Operation(summary = "Login do usuário")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Optional<usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent() && passwordEncoder.matches(senha, usuarioOpt.get().getSenha())) {
            usuario usuario = usuarioOpt.get();
            if (!usuario.isEmailVerificado()) {
                return ResponseEntity.status(403).body("Confirme seu e-mail para acessar o sistema.");
            }
            if (!usuario.isAtivo()) {
                return ResponseEntity.status(403).body("Conta inativa. Contate o suporte.");
            }
            return ResponseEntity.ok("Login realizado com sucesso!");
        }
        return ResponseEntity.status(401).body("E-mail ou senha inválidos.");
    }

    @PostMapping("/confirmar-email")
    @Operation(summary = "Confirmar e-mail do usuário")
    public ResponseEntity<?> confirmarEmail(@RequestParam String email, @RequestParam String codigo) {
        Optional<usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent() && codigo.equals(usuarioOpt.get().getCodigoVerificacao())) {
            usuario usuario = usuarioOpt.get();
            usuario.setEmailVerificado(true);
            usuario.setCodigoVerificacao(null);
            usuarioRepository.save(usuario);
            return ResponseEntity.ok("E-mail confirmado com sucesso!");
        }
        return ResponseEntity.badRequest().body("Código inválido.");
    }

    @PostMapping("/reenviar-codigo")
    @Operation(summary = "Reenviar código de verificação de e-mail")
    public ResponseEntity<?> reenviarCodigo(@RequestParam String email) {
        Optional<usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent()) {
            usuario usuario = usuarioOpt.get();
            String novoCodigo = String.format("%06d", new Random().nextInt(999999));
            usuario.setCodigoVerificacao(novoCodigo);
            usuarioRepository.save(usuario);
            servicoEmail.enviarCodigoVerificacao(usuario.getEmail(), novoCodigo);
            return ResponseEntity.ok("Novo código enviado para seu e-mail.");
        }
        return ResponseEntity.badRequest().body("Usuário não encontrado.");
    }
}