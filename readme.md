Configuração do knex

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