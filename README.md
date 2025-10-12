# Livraime
 Plataforma de doação e assinatura de livros, que conecta doadores a crianças carentes e incentiva a leitura através do envio mensal de livros e brindes.

# 🗺️ Roadmap (em discussão) — Livrai-me

## 🚀 Fase 1 — Fundamentos do Sistema (Infra e Autenticação)
- [X] **Configuração do projeto Spring Boot 3 + Java 21**
- [X] Configuração de banco de dados **MariaDB**
- [ ] Setup de migrações automáticas (**Flyway/Liquibase**)
- [X] Criação das entidades base: `User`, `Admin`, `Partner`, `Beneficiary`, `Plan`
- [X] Configuração do **JPA/Hibernate**
- [X] Implementar **CRUD** básico com validações (Jakarta Validation)
- [X] Implementar **autenticação**
- [ ] Implementar **autorização por roles** (`USER`, `ADMIN`, `PARTNER`, `AUTHOR`)
- [X] Implementar suporte básico para envio de e-mail (serviço presente)
- [ ] Implementar **fluxo de confirmação de e-mail**
- [ ] Implementar **recuperação de senha**
- [X] Adicionar **Swagger/OpenAPI** para documentação
- [ ] Adicionar **Spring Boot Actuator** (monitoramento e health check)
- [ ] Configurar logs estruturados

---

## 📦 Fase 2 — Módulo de Assinaturas
- [ ] Criar entidade `Subscription` (assinatura)
- [X] Criar entidade `Plan` (mensal, trimestral, anual)
- [ ] Implementar **cadastro e gerenciamento de planos** (com telas/fluxos completos)
- [ ] Implementar **ativação e cancelamento de assinaturas**
- [ ] Integração com **gateway de pagamento (PagBank ou Stripe)**
- [ ] Registrar e exibir histórico de pagamentos
- [ ] Processamento mensal de envios (assinante + beneficiário)
- [ ] Notificação por e-mail após cada envio
- [ ] Logs e histórico de processamento mensal

---

## 🎯 Fase 3 — Beneficiários e Parcerias
- [X] Criar entidade `Beneficiary` (dados pessoais e escolares)
- [X] Implementar **cadastro de beneficiários**
- [ ] Implementar **associação automática/manual** entre assinantes e beneficiários
- [ ] Registrar histórico de livros enviados a cada beneficiário
- [ ] Implementar status do beneficiário (ativo, aguardando, suspenso)
- [X] Criar entidade `Partner`
- [X] Implementar **cadastro de parceiros**
- [ ] Implementar **controle de estoque** de livros de parceiros

---

## ✍️ Fase 4 — Autores Independentes
- [ ] Criar entidade `Author` e `Book`
- [ ] Implementar **cadastro de autores independentes**
- [ ] Implementar **upload de obras digitais**
- [ ] Criar fluxo de **curadoria e aprovação** de obras
- [ ] Exibir **obras publicadas** na área pública do site

---

## 💻 Fase 5 — Painéis e Interfaces
- [ ] Criar **painel administrativo**
- [ ] Criar **painel do assinante**
- [ ] Criar **painel de parceiros**
- [ ] Criar **interface pública** (páginas institucionais e de planos)

---

## 🔔 Fase 6 — Comunicação e Notificações
- [X] Serviço de envio de e-mail (implementação básica presente)
- [ ] Envio de e-mails automáticos completos (cadastro, pagamento, envio)
- [ ] Notificações internas para administradores (falhas, atrasos)
- [ ] Mensagens motivacionais para assinantes
- [ ] Testes de envio e rastreamento de falhas

---

## 🧩 Fase 7 — Testes, Segurança e Deploy
- [ ] Implementar **testes unitários** (JUnit)
- [ ] Implementar **testes de integração** (Testcontainers)
- [ ] Revisão de segurança (JWT, bcrypt, CORS, HTTPS)
- [ ] Implementar **backup automático** do banco
- [ ] Preparar ambiente de produção (Docker/Kubernetes)
- [ ] Deploy inicial em servidor ou nuvem
- [ ] Monitoramento contínuo (Actuator, logs)

---

## 🧠 Fase 8 — Melhorias Futuras
- [ ] Sistema de **recomendação de livros** para beneficiários
- [ ] Módulo de **impacto social** (estatísticas públicas)
- [ ] Programa de **indicação de assinantes**
- [ ] Integração com **plataforma de escolas**
- [ ] **Internacionalização** completa (i18n)
- [ ] **Aplicativo móvel** (Android/iOS)
