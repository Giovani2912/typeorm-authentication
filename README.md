# Passo a passo da configuração do projeto:

# Configurando o typescript e o nodemon
```
# Cria o package.json

    $ yarn init -y

# Add dependências

    $ yarn add typescript ts-node nodemon -D

# Cria o tsconfig.json

    $ npx tsc --init
```

## Devemos adicionar o script start dentro do package.json, dessa seguinte maneira:

```
    "scripts": {
        "start": "npx nodemon --exec ts-node src/index.ts"
    },
```
---



# Configurando o Typeorm:

```
    $ yarn add typeorm reflect-metadata
```

## Descomentar os decorators in tsconfig.json

```
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false,
```

# Crie o arquivo ormconfig.json

```
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "admin1234",
    "database": "tsauth",
    "entities": [
       "src/database/models/*.ts"
    ],
    "migrations": [
       "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
 }
```

## E adicione o script do typeorm in package.json

```
    "typeorm": "npx ts-node ./node_modules/typeorm/cli.js"
```

# Crie src/database/connect.ts

```
    import {createConnection} from 'typeorm'

    createConnection();
```

# Passo a passo da criação de uma tabela:
# Todas as tabelas devem ter:
 ## Migration, Model, getRepository
    - Criar a migrations

    - Passar os dados dentro da migration

    - Executar a migration

    - Criar um Model para a migration

# Criando e executando a migration de Usuário

```
# Cria

    yarn typeorm migration:create -n CreateUsersTable;

# Executa

    yarn typeorm migration:run;
```