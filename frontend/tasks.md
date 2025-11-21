# PAINEL ADM

## Gestão de planos

- [] Listar

## Gestão de usuário

- [x] Listar
- [x] Criar

  - [x] Botão de cadastro no "header"

- [x] Tela de confirmação de email

  - [x] Nova rota
  - [x] Redirecionamento após cadastro
  - [x] Inserir email do usuário cadastrado por baixo dos panos
  - [x] Integrar com API

- [x] refactor: separar responsabilidades entre camadas no "UserController" e "UserService"

  - [x] login usuário
  - [x] confirmar email
  - [x] reenviar cógigo

- [x] feat: elaborar requisição de "Reenviar código"

- [x] Login de usuário
- [ ] Editar
- [ ] Deletar
- [ ] Vincular usuário a algum plano

  - [ ] Remover campos de usuário na página de planos
  - [ ] Elaborar recurso visual para exibir o plano vinculado

- [ ] Elaborar login de usuário

  - [ ] Integrar api de login de usuário
  - [ ] Persistir credenciais de usuário na sessão do usuáio
  - [ ] Inserir botão de logout caso usuário esteja logado

- [] Feat: Implementar flag "email ativo" no adm
- [] Corrigir: Mensagem de erro no input de telefone
- [] Corrigir: Verificar CPF antes de criar usuário
