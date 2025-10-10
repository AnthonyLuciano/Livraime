# Levantamento de Requisitos — Livrai-me

## 1. Visão geral
Plataforma de doação e assinatura de livros para conectar doadores a crianças necessitadas e gerenciar assinaturas, beneficiários, parceiros e administradores.

## 2. Escopo funcional (existente)
- Autenticação e cadastro de usuários com verificação por código por e‑mail:
  - Implementado em [`Livraime.Unp.Livraime.controller.AuthController`](src/main/java/Livraime/Unp/Livraime/controller/AuthController.java) — [src/main/java/Livraime/Unp/Livraime/controller/AuthController.java](src/main/java/Livraime/Unp/Livraime/controller/AuthController.java)
  - Serviço de envio de e‑mail: [`Livraime.Unp.Livraime.servico.ServicoEmail`](src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java) — [src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java](src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java)
  - Persistência de usuário via repositório: [`Livraime.Unp.Livraime.repositorio.UsuarioRepository`](src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java) — [src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java](src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java)
  - Modelo de usuário: [`Livraime.Unp.Livraime.modelo.usuario`](src/main/java/Livraime/Unp/Livraime/modelo/usuario.java) — [src/main/java/Livraime/Unp/Livraime/modelo/usuario.java](src/main/java/Livraime/Unp/Livraime/modelo/usuario.java)

- Gerenciamento de planos:
  - Enum e busca por código/alias: [`Livraime.Unp.Livraime.modelo.planos`](src/main/java/Livraime/Unp/Livraime/modelo/planos.java) — [src/main/java/Livraime/Unp/Livraime/modelo/planos.java](src/main/java/Livraime/Unp/Livraime/modelo/planos.java)
  - API de planos: [`Livraime.Unp.Livraime.controller.PlanoController`](src/main/java/Livraime/Unp/Livraime/controller/PlanoController.java) — [src/main/java/Livraime/Unp/Livraime/controller/PlanoController.java](src/main/java/Livraime/Unp/Livraime/controller/PlanoController.java)

- CRUD/coleções em memória para recursos não-persistidos (para protótipo):
  - Usuários: [`Livraime.Unp.Livraime.controller.UsuarioController`](src/main/java/Livraime/Unp/Livraime/controller/UsuarioController.java) — [src/main/java/Livraime/Unp/Livraime/controller/UsuarioController.java](src/main/java/Livraime/Unp/Livraime/controller/UsuarioController.java)
  - Beneficiados: [`Livraime.Unp.Livraime.controller.BeneficiadoController`](src/main/java/Livraime/Unp/Livraime/controller/BeneficiadoController.java) — [src/main/java/Livraime/Unp/Livraime/controller/BeneficiadoController.java](src/main/java/Livraime/Unp/Livraime/controller/BeneficiadoController.java)
  - Parceiros: [`Livraime.Unp.Livraime.controller.ParceiroController`](src/main/java/Livraime/Unp/Livraime/controller/ParceiroController.java) — [src/main/java/Livraime/Unp/Livraime/controller/ParceiroController.java](src/main/java/Livraime/Unp/Livraime/controller/ParceiroController.java)
  - Admins: [`Livraime.Unp.Livraime.controller.AdminController`](src/main/java/Livraime/Unp/Livraime/controller/AdminController.java) — [src/main/java/Livraime/Unp/Livraime/controller/AdminController.java](src/main/java/Livraime/Unp/Livraime/controller/AdminController.java)

- Interface estática de teste de login:
  - [src/main/resources/static/login.html](src/main/resources/static/login.html) — [src/main/resources/static/login.html](src/main/resources/static/login.html)

- Documentação OpenAPI (Swagger UI) configurada:
  - [`Livraime.Unp.Livraime.config.OpenApiConfig`](src/main/java/Livraime/Unp/Livraime/config/OpenApiConfig.java) — [src/main/java/Livraime/Unp/Livraime/config/OpenApiConfig.java](src/main/java/Livraime/Unp/Livraime/config/OpenApiConfig.java)

## 3. Requisitos funcionais (sugeridos / faltantes)
- RF1: Persistir usuários, beneficiados, parceiros e admins em banco (JPA + MariaDB). (Atualmente apenas `UsuarioRepository` existe: [`Livraime.Unp.Livraime.repositorio.UsuarioRepository`](src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java) — [src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java](src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java))
- RF2: CRUD completo com validação (DTOs, validações via Jakarta Validation).
- RF3: Fluxo de confirmação de e‑mail completo (resiliência em envio de e‑mail, retry, logs). Serviço existente: [`ServicoEmail`](src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java) — [src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java](src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java)
- RF4: Login com geração de token (JWT) e roles (USER / ADMIN).
- RF5: APIs administrativas protegidas por autorização.
- RF6: Painel de operações para visualizar assinaturas, envios e status dos beneficiados.
- RF7: Histórico de envios e processamento mensal de kits/livros.

## 4. Requisitos não-funcionais
- RNF1: Segurança — senhas armazenadas com bcrypt (`Livraime.Unp.Livraime.seguranca.SecurityConfig`) — [src/main/java/Livraime/Unp/Livraime/seguranca/SecurityConfig.java](src/main/java/Livraime/Unp/Livraime/seguranca/SecurityConfig.java)
- RNF2: E‑mail via SMTP — configuração em [src/main/resources/application.properties](src/main/resources/application.properties) — [src/main/resources/application.properties](src/main/resources/application.properties)
- RNF3: Banco de dados — MariaDB; URL e credenciais em [src/main/resources/application.properties](src/main/resources/application.properties)
- RNF4: Observabilidade — habilitar logs e métricas (Actuator já incluído no pom.xml) — [pom.xml](pom.xml)
- RNF5: Documentação API via OpenAPI (já configurado) — [`OpenApiConfig`](src/main/java/Livraime/Unp/Livraime/config/OpenApiConfig.java) — [src/main/java/Livraime/Unp/Livraime/config/OpenApiConfig.java](src/main/java/Livraime/Unp/Livraime/config/OpenApiConfig.java)
- RNF6: Testes unitários — exemplo em [src/test/java/Livraime/Unp/Livraime/modelo/PlanosTest.java](src/test/java/Livraime/Unp/Livraime/modelo/PlanosTest.java) — [src/test/java/Livraime/Unp/Livraime/modelo/PlanosTest.java](src/test/java/Livraime/Unp/Livraime/modelo/PlanosTest.java)

## 5. Restrições / Premissas
- Uso de Spring Boot 3.x (pom.xml) — [pom.xml](pom.xml)
- Java 21 (propriedade do pom) — [pom.xml](pom.xml)
- Envio de e‑mail depende de credenciais SMTP configuradas em application.properties — [src/main/resources/application.properties](src/main/resources/application.properties)

## 6. Prioridades (exemplo)
1. Persistência e migração de modelos (Users, Beneficiados, Parceiros, Admins).
2. Fluxo de registro + verificação por e‑mail (robustecer `AuthController` + `ServicoEmail`).
3. Autenticação baseada em JWT e proteção de endpoints.
4. UI mínima (login/cadastro) integrada.
5. Relatórios e processos de envio mensal.

## 7. Itens de melhoria / backlog
- Implementar DTOs e mapeamento (MapStruct ou manual).
- Implementar testes de integração (Banco em memória ou Testcontainers).
- Implementar fila para processamento de envios (RabbitMQ/Kafka).
- Internacionalização (i18n) para mensagens.

---

Arquivos principais referenciados:
- [`Livraime.Unp.Livraime.controller.AuthController`](src/main/java/Livraime/Unp/Livraime/controller/AuthController.java) — [src/main/java/Livraime/Unp/Livraime/controller/AuthController.java](src/main/java/Livraime/Unp/Livraime/controller/AuthController.java)  
- [`Livraime.Unp.Livraime.servico.ServicoEmail`](src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java) — [src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java](src/main/java/Livraime/Unp/Livraime/servico/ServicoEmail.java)  
- [`Livraime.Unp.Livraime.repositorio.UsuarioRepository`](src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java) — [src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java](src/main/java/Livraime/Unp/Livraime/repositorio/UsuarioRepository.java)  
- [`Livraime.Unp.Livraime.modelo.usuario`](src/main/java/Livraime/Unp/Livraime/modelo/usuario.java) — [src/main/java/Livraime/Unp/Livraime/modelo/usuario.java](src/main/java/Livraime/Unp/Livraime/modelo/usuario.java)  
- [`Livraime.Unp.Livraime.modelo.planos`](src/main/java/Livraime/Unp/Livraime/modelo/planos.java) — [src/main/java/Livraime/Unp/Livraime/modelo/planos.java](src/main/java/Livraime/Unp/Livraime/modelo/planos.java)  
- [src/main/resources/static/login.html](src/main/resources/static/login.html) — [src/main/resources/static/login.html](src/main/resources/static/login.html)  
- [src/main/resources/application.properties](src/main/resources/application.properties) — [src/main/resources/application.properties](src/main/resources/application.properties)  
- [`Livraime.Unp.Livraime.seguranca.SecurityConfig`](src/main/java/Livraime/Unp/Livraime/seguranca/SecurityConfig.java) — [src/main/java/Livraime/Unp/Livraime/seguranca/SecurityConfig.java](src/main/java/Livraime/Unp/Livraime/seguranca/SecurityConfig.java)
