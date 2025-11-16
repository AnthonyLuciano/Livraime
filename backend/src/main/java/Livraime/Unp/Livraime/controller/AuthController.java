package Livraime.Unp.Livraime.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Livraime.Unp.Livraime.controller.dto.mapper.UsuarioMapper;
import Livraime.Unp.Livraime.controller.dto.request.ConfirmEmailRequestDTO;

/**
 * Controller responsável pelo gerenciamento de autenticação de usuários.
 * Fornece endpoints para cadastro, login, confirmação de email e reenvio de códigos.
 * Implementa a segurança básica do sistema com verificação de email.
 * -Anthony
 */

import Livraime.Unp.Livraime.controller.dto.request.LoginRequest;
import Livraime.Unp.Livraime.controller.dto.request.user.CreateUserDTO;
import Livraime.Unp.Livraime.controller.dto.response.LoginResponseDTO;
import Livraime.Unp.Livraime.controller.dto.response.ResendEmailResponseDTO;
import Livraime.Unp.Livraime.exceptions.BadRequestException;
import Livraime.Unp.Livraime.exceptions.ConflictException;
import Livraime.Unp.Livraime.exceptions.EmailNotVerifiedException;
import Livraime.Unp.Livraime.exceptions.ResourceNotFoundException;
import Livraime.Unp.Livraime.exceptions.UnauthorizedException;
import Livraime.Unp.Livraime.modelo.Usuario;
import Livraime.Unp.Livraime.servico.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/auth")
@Tag(name = "auth", description = "Autenticação e cadastro de usuários")
public class AuthController {

    @Autowired
    private UserService userService;

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
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Usuário cadastrado. Verifique seu e-mail para confirmar.");
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
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequest loginRequest) {
        try {
            Usuario user = userService.loginUser(loginRequest.getEmail(), loginRequest.getSenha());
            var mappedUser = UsuarioMapper.toResponse(user);

            return ResponseEntity.status(HttpStatus.OK)
                    .body(new LoginResponseDTO(mappedUser, "Login realizado com sucesso!"));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponseDTO(null, e.getMessage()));
        } catch (EmailNotVerifiedException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new LoginResponseDTO(null, e.getMessage()));
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new LoginResponseDTO(null, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new LoginResponseDTO(null, e.getMessage()));
        }
    }

    /**
     * Confirma o email do usuário através do código enviado.
     * 
     * @param email Email do usuário
     * @param code  Código de verificação recebido
     *              -Anthony
     */
    @PostMapping("/confirmar-email")
    @Operation(summary = "Confirmar e-mail do usuário")
    public ResponseEntity<String> confirmarEmail(@RequestBody ConfirmEmailRequestDTO request) {
        var isValid = userService.validateCode(request);
        try {
            if (isValid)
                return ResponseEntity.ok("E-mail confirmado com sucesso!");

            return ResponseEntity.badRequest().body("Código inválido.");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    /**
     * Reenvia o código de verificação para o email do usuário.
     * 
     * @param email Email do usuário que solicitou novo código
     *              -Anthony
     */
    @PostMapping("/reenviar-codigo")
    @Operation(summary = "Reenviar código de verificação de e-mail")
    public ResponseEntity<ResendEmailResponseDTO> reenviarCodigo(@RequestParam String email) {
        try {
            userService.resendCodeToEmail(email);
            return ResponseEntity.ok(new ResendEmailResponseDTO(true, "Novo código enviado para seu e-mail."));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.badRequest().body(new ResendEmailResponseDTO(true, e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ResendEmailResponseDTO(true, e.getMessage()));
        }
    }
}