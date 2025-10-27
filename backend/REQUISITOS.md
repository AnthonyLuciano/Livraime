# Requisitos do Sistema — Livrai‑me (versão expandida)

## 1. Requisitos Funcionais

### Núcleo do Sistema
- **RF1:** Persistência de dados em banco relacional (MariaDB via JPA).
- **RF2:** CRUD completo para usuários, beneficiários, parceiros, administradores e autores independentes.
- **RF3:** Validação de dados via DTOs e Jakarta Validation.
- **RF4:** Autenticação e autorização baseadas em JWT com controle de roles (`USER`, `ADMIN`, `PARTNER`, `AUTHOR`).
- **RF5:** Fluxo de confirmação de e-mail e recuperação de senha.
- **RF6:** Logs de autenticação, erros e atividades administrativas.

### Módulo de Assinaturas
- **RF7:** Cadastro de planos de assinatura (mensal, trimestral, anual) com valores configuráveis.
- **RF8:** Registro, ativação, renovação e cancelamento de assinaturas.
- **RF9:** Integração com gateway de pagamento (ex: PagBank) para cobrança automática.
- **RF10:** Geração de histórico de pagamentos e status de cada assinatura.
- **RF11:** Processamento mensal de envios de livros (um para assinante e um para beneficiário).
- **RF12:** Notificação por e-mail ao assinante e parceiro sobre cada envio realizado.

### Módulo de Beneficiários
- **RF13:** Cadastro de beneficiários (nome, idade, endereço, escola e responsável).
- **RF14:** Associação automática ou manual entre assinantes e beneficiários.
- **RF15:** Registro do histórico de livros doados a cada beneficiário.
- **RF16:** Atualização de status do beneficiário (ativo, aguardando, suspenso).

### Módulo de Parceiros e Autores
- **RF17:** Cadastro de sebos parceiros com informações de contato e catálogo disponível.
- **RF18:** Controle de estoque de livros fornecidos por cada parceiro.
- **RF19:** Cadastro de autores independentes com upload de obras digitais.
- **RF20:** Publicação e curadoria de obras enviadas pelos autores.
- **RF21:** Exibição de livros e autores parceiros na área pública do site.

### Painéis e Relatórios
- **RF22:** Painel do assinante (“Invest Board”) com informações sobre:
  - Beneficiário associado;
  - Livros enviados;
  - Próximo envio programado;
  - Histórico de doações.
- **RF23:** Painel administrativo com:
  - Gestão de usuários, beneficiários, assinaturas, parceiros e autores;
  - Relatórios de desempenho mensal (assinaturas, livros doados, beneficiários atendidos);
  - Filtros e exportação de dados.
- **RF24:** Painel de parceiros com pedidos pendentes e confirmações de envio.

### Comunicação e Notificações
- **RF25:** Envio automático de e-mails transacionais (cadastro, pagamento, envio, renovação).
- **RF26:** Notificações internas para administradores sobre falhas ou atrasos em envios.
- **RF27:** Mensagens motivacionais e informativas periódicas aos assinantes.

---

## 2. Requisitos Não Funcionais

- **RNF1:** Segurança: uso de senhas criptografadas (bcrypt) e tokens seguros (JWT).
- **RNF2:** Disponibilidade mínima de 99% no ambiente de produção.
- **RNF3:** Logs estruturados e rastreamento via Spring Boot Actuator.
- **RNF4:** Migrações de banco controladas (Flyway ou Liquibase).
- **RNF5:** Testes automatizados de unidade e integração.
- **RNF6:** Suporte a internacionalização (português/inglês).
- **RNF7:** Interface responsiva e acessível (frontend).
- **RNF8:** Escalabilidade horizontal via containers (Docker/Kubernetes).
- **RNF9:** Documentação da API com OpenAPI/Swagger.
- **RNF10:** Política de backup e recuperação de dados.


## 3. Restrições e premissas
- Uso de Spring Boot 3.x e Java 21.
- Envio de e‑mail depende de credenciais SMTP corretamente configuradas.
- Ambiente de produção com MariaDB disponível; testes podem usar banco em memória ou containers.

## 4. Prioridades sugeridas (roadmap inicial)
1. Modelagem e persistência dos principais domínios (Users, Beneficiados, Parceiros, Admins) + migrações.
2. Fluxo de registro com confirmação de e‑mail resiliente.
3. Implementação de autenticação JWT e autorização por roles.
4. APIs e endpoints administrativos protegidos.
5. UI mínima para login/cadastro e painel operacional.
6. Relatórios e processo mensal de envios.

## 5. Backlog / melhorias
- Introduzir DTOs e mapear entidades (MapStruct ou manual).
- Testes de integração com Testcontainers.
- Fila para processamento assíncrono de envios (RabbitMQ/Kafka).
- Internacionalização (i18n) das mensagens.
- Monitoramento e alertas para processos críticos.

