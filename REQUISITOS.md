# Levantamento de Requisitos — Livrai‑me

## 1. Visão geral
Plataforma para conectar doadores a crianças necessitadas por meio de doações e assinaturas de livros, com gestão de usuários, beneficiários, parceiros, assinaturas e operações administrativas.

## 2. Escopo funcional (implementado / em protótipo)
- Autenticação e cadastro de usuários com verificação por e‑mail.
- Serviço de envio de e‑mail para confirmação e notificações.
- Persistência de usuários (repositório existente).
- Gestão de planos (enumeração e API).
- CRUD em memória para recursos protótipo (usuários, beneficiados, parceiros, administradores).
- Interface estática de teste de login.
- Documentação da API via OpenAPI/Swagger.

## 3. Requisitos funcionais (prioritários)
- RF1: Persistência em banco relacional (JPA + MariaDB) para usuários, beneficiados, parceiros e administradores.
- RF2: CRUD completo com DTOs e validações (Jakarta Validation).
- RF3: Fluxo robusto de confirmação de e‑mail (retry, logs, tratamento de falhas).
- RF4: Autenticação com tokens JWT e controle de roles (USER / ADMIN).
- RF5: Proteção e autorização para APIs administrativas.
- RF6: Painel operacional para visualizar assinaturas, envios e status dos beneficiados.
- RF7: Registro e histórico de envios; processamento mensal de kits/livros.

## 4. Requisitos não‑funcionais
- RNF1: Segurança: armazenamento seguro de senhas (bcrypt) e boas práticas de segurança.
- RNF2: Envio de e‑mail via SMTP com configuração segura de credenciais.
- RNF3: Configuração de banco de dados (MariaDB) e suporte a migrações.
- RNF4: Observabilidade: logs estruturados, métricas e endpoints de saúde (Actuator).
- RNF5: Documentação da API via OpenAPI.
- RNF6: Cobertura de testes automatizados (unitários e integração).

## 5. Restrições e premissas
- Uso de Spring Boot 3.x e Java 21.
- Envio de e‑mail depende de credenciais SMTP corretamente configuradas.
- Ambiente de produção com MariaDB disponível; testes podem usar banco em memória ou containers.

## 6. Prioridades sugeridas (roadmap inicial)
1. Modelagem e persistência dos principais domínios (Users, Beneficiados, Parceiros, Admins) + migrações.
2. Fluxo de registro com confirmação de e‑mail resiliente.
3. Implementação de autenticação JWT e autorização por roles.
4. APIs e endpoints administrativos protegidos.
5. UI mínima para login/cadastro e painel operacional.
6. Relatórios e processo mensal de envios.

## 7. Backlog / melhorias
- Introduzir DTOs e mapear entidades (MapStruct ou manual).
- Testes de integração com Testcontainers.
- Fila para processamento assíncrono de envios (RabbitMQ/Kafka).
- Internacionalização (i18n) das mensagens.
- Monitoramento e alertas para processos críticos.

---
Resumo: focar primeiro na persistência e autenticação segura (registro com e‑mail e JWT), depois estabilizar APIs administrativas e painel operacional, acrescentando observabilidade e testes.
