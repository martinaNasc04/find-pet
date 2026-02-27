# Projeto FindPet
----
## Descrição
Encontre o seu melhor amigo ou adote-o através da nossa plataforma FindPet. Crie sua conta ou acesse a página de pets postados na nossa plataforma e procure o seu pet.
O objetivo do projeto é criar uma comunidade com pessoas que querem adortar um amigo ou procurar um que foi perdido, ou até mesmo anunciar um pet que foi encontrado.

---
## Tecnologias utilizadas
- **Next.js**: Framework utilizado para desenvolver aplicações web.
- **Clerk**: Plataforma de autenticação e gerenciamento de usuários.
- **Drizzle**: é uma biblioteca de ORM (Object-Relational Mapping) para gerenciamento de dados em bancos de dados relacionais com TypeScript.
- **Cloudinary**: Plataforma de hospedagem de imagens.
- **Neon**: é um banco de dados PostgreSQL com suporte a serverless.
- **Tailwind**: Framework de estilos CSS.
- **Zod**: biblioteca para fazer a validação de dados.
- **Shadcn/ui**: biblioteca de componentes de interface de usuário.

---
## Executar projeto
1. Clonar o repositório do GitHub.
2. Instalar as dependências do projeto.
3. Iniciar o projeto com o comando `pnpm install`, ou `npm istall`.
4. Iniciar o projeto com o comando `pnpm dev` ou `npm run dev`.
5. Crie um arquivo .env com as seguintes variáveis de ambiente:

```
# CLERK AUTHENTICATION
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# DATABASE NEON
DATABASE_URL=


# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
6. Crie uma conta no [Clerk](https://clerk.com/), crie uma aplicação e clique na opção "Next.js" e siga as instruções para implementar Clerk no projeto
7. Para o banco de dados, crie uma conta no [Neon](https://neon.com/), crie uma projeto e siga as instruções para obter a URL de conexão ao banco de dados.
8. Para configurar o Drizzle, digite `npx drizzle-kit generate` e `npx drizzle-kit migrate` para fazer as migrações. Para enviar as tabelas para o Neon, digite `npx drizzle-kit push`. E para popular as tabelas digite `pnpm db:seed` ou `tsx src/lib/seed.ts`.