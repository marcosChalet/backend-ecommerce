# Projeto 2 - Compass UOL

Antes de prosseguir, cerfique-se de ter o docker instalado.

## Instruções de Execução

Siga estes passos para clonar e executar o projeto em seu ambiente local:

1. Clone o repositório:

```sh
git clone https://github.com/marcosChalet/backend-ecommerce.git
```

2. Navegue até o diretório do projeto:

```sh
cd backend-ecommerce
```

3. Suba o projeto com Docker:

```sh
docker compose up -d
```

4. Popule o banco de dados para teste:

```sh
docker exec -i backend-ecommerce-db-service-1 psql -U user -d db < ./initdb.sql
```

## Comandos úteis

```sh
npx prisma generate
```

```sh
npx prisma migrate dev --name init
```

<br />

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
