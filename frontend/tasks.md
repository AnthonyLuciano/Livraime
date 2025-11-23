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
  - [x] reenviar código

- [x] feat: elaborar requisição de "Reenviar código"

- [x] Login de usuário

  - [x] Persistir em storage

    - [x] Mudar ações no header do sistema
    - [x] Ação de "logout"
    - [x] Somente exibir "página de usuário" caso haja sessão
    - [x] Redirecionar para login ao tentar assinar plano e não haja sessão

  - [x] Efetuar autorização baseado na role do usuário
        -> Página adm

- [x] Editar
- [x] Deletar
- [x] Habilitar novamente
- [ ] Vincular usuário a algum plano

- [x] Integrar api de planos

  - [x] Remover campos de usuário na página de planos
  - [x] Elaborar recurso visual para exibir o plano vinculado

- [x] Integrar api de beneficiados
- [x] Editar usuário

- [ ] Integrar api de parceiros
- [x] Integrar api de métricas

### Página do assinante

- [x] integrar api de exibir beneficiados
- [] Editar usuário
