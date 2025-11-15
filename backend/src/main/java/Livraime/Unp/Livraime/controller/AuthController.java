package Livraime.Unp.Livraime.controller;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Livraime.Unp.Livraime.controller.dto.mapper.UsuarioMapper;

/**
 * Controller responsável pelo gerenciamento de autenticação de usuários.
 * Fornece endpoints para cadastro, login, confirmação de email e reenvio de códigos.
 * Implementa a segurança básica do sistema com verificação de email.
 * -Anthony
 */

import Livraime.Unp.Livraime.controller.dto.request.LoginRequest;
import Livraime.Unp.Livraime.controller.dto.request.user.CreateUserDTO;
import Livraime.Unp.Livraime.exceptions.BadRequestException;
import Livraime.Unp.Livraime.exceptions.ConflictException;
import Livraime.Unp.Livraime.modelo.Usuario;
import Livraime.Unp.Livraime.repositorio.UsuarioRepository;
import Livraime.Unp.Livraime.servico.ServicoEmail;
import Livraime.Unp.Livraime.servico.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/auth")
@Tag(name = "auth", description = "Autenticação e cadastro de usuários")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ServicoEmail servicoEmail;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Cadastra um novo usuário no sistema.
     * Cria um código de verificação e envia por email.
     * Senha é criptografada antes de salvar.
     * -Anthony
     */
    @PostMapping("/cadastro")
    @Operation(summary = "Cadastrar novo usuário")
    public ResponseEntity<?> cadastrar(@RequestBody CreateUserDTO novoUsuario) {
        Usuario entity = UsuarioMapper.createToEntity(novoUsuario);
        try {
            userService.createUser(entity);
            return ResponseEntity.ok("Usuário cadastrado. Verifique seu e-mail para confirmar.");
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (ConflictException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    /**
     * Realiza o login do usuário.
     * Verifica se o email está confirmado e se a conta está ativa.
     * 
     * @param loginRequest Dados de login do usuário
     *                     -Anthony
     */

    /**
     * Realiza o login do usuário.
     * Verifica se o email está confirmado e se a conta está ativa.
     * 
     * @param loginRequest Objeto contendo email e senha do usuário
     *                     -Anthony
     */
    @PostMapping("/login")
    @Operation(summary = "Login do usuário")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent() && passwordEncoder.matches(senha, usuarioOpt.get().getSenha())) {
            Usuario usuario = usuarioOpt.get();
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

    /**
     * Confirma o email do usuário através do código enviado.
     * 
     * @param email  Email do usuário
     * @param codigo Código de verificação recebido
     *               -Anthony
     */
    @PostMapping("/confirmar-email")
    @Operation(summary = "Confirmar e-mail do usuário")
    public ResponseEntity<?> confirmarEmail(@RequestParam String email, @RequestParam String codigo) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent() && codigo.equals(usuarioOpt.get().getCodigoVerificacao())) {
            Usuario usuario = usuarioOpt.get();
            usuario.setEmailVerificado(true);
            usuario.setCodigoVerificacao(null);
            usuarioRepository.save(usuario);
            return ResponseEntity.ok("E-mail confirmado com sucesso!");
        }
        return ResponseEntity.badRequest().body("Código inválido.");
    }

    /**
     * Reenvia o código de verificação para o email do usuário.
     * 
     * @param email Email do usuário que solicitou novo código
     *              -Anthony
     */
    @PostMapping("/reenviar-codigo")
    @Operation(summary = "Reenviar código de verificação de e-mail")
    public ResponseEntity<?> reenviarCodigo(@RequestParam String email) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            String novoCodigo = String.format("%06d", new Random().nextInt(999999));
            usuario.setCodigoVerificacao(novoCodigo);
            usuarioRepository.save(usuario);
            servicoEmail.enviarCodigoVerificacao(usuario.getEmail(), novoCodigo);
            return ResponseEntity.ok("Novo código enviado para seu e-mail.");
        }
        return ResponseEntity.badRequest().body("Usuário não encontrado.");
    }
}