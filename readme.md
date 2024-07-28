# Sobre o projeto

## RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

## RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações o qual ele criou;

# Configuração do knex

Criar uma migration nova
```bash
npm run knex -- migrate:make nome-da-migrate
```

Executando uma migration
```bash
npm run knex -- migrate:latest
```
voltar a versão.
```bash
npm run knex -- migrate:rollback
```