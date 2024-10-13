<a name="readme-top"></a>

# Next Auth V5 - A simple authentication service with Prisma

![Next - A simple authentication service](/.github/images/img_main.png "Next - A simple authentication service")

[![GitHub license](https://flat.badgen.net/github/license/frantanius/next-auth-v5?icon=github&color=black&scale=1.01)](https://github.com/frantanius/next-auth-v5/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/frantanius/next-auth-v5/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/frantanius/next-auth-v5?icon=github&color=black&scale=1.01)](https://github.com/frantanius/next-auth-v5/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/frantanius/next-auth-v5?icon=github&color=black&scale=1.01)](https://github.com/frantanius/next-auth-v5/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/frantanius/next-auth-v5?icon=github&color=black&scale=1.01)](https://github.com/frantanius/next-auth-v5/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/frantanius/next-auth-v5?icon=github&color=black&scale=1.01)](https://github.com/frantanius/next-auth-v5/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Acknowledgements](#gem-acknowledgements)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
next-auth/
  |- actions/
    |- data/
      |-- account.ts
      |-- password-reset-token.ts
      |-- two-factor-confirmation.ts
      |-- two-factor-token.ts
      |-- user.ts
      |-- verification-token.ts
    |-- admin.ts
    |-- login.ts
    |-- logout.ts
    |-- new-password.ts
    |-- new-verification.ts
    |-- register.ts
    |-- reset.ts
    |-- settings.ts
  |- app/
    |-- (protected)/
        |--- _components/
        |--- admin/
        |--- client/
        |--- server/
        |--- settings/
        |--- layout.tsx
    |-- api/
        |--- admin/
        |--- auth/[...nextauth]/
    |-- auth/
        |--- error/
        |--- login/
        |--- new-password/
        |--- new-verification/
        |--- register/
        |--- reset/
        |--- layout.tsx
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- page.tsx
  |- components/
    |-- auth/
    |-- ui/
    |-- form-error.tsx
    |-- form-success.tsx
    |-- navbar.tsx
    |-- user-info.tsx
  |- lib/
    |-- db.ts
    |-- mail.ts
    |-- tokens.ts
    |-- utils.ts
  |- prisma/
    |-- schema.prisma
  |- schemas/
    |-- index.ts
  |- .editorconfig
  |- .env
  |- .eslintrc.json
  |- .gitignore
  |- .prettierrc
  |- auth.config.ts
  |- auth.ts
  |- components.json
  |- middleware.ts
  |- next-auth.d.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- routes.ts
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root directory.
4. Contents of `.env`:

```bash
# .env

# neon postgresql db
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/next-auth?sslmode=require&pgbouncer=true"
DIRECT_URL="postgresql://<username>:<password>@<host>:<port>/next-auth?sslmode=require"

# random auth secret (https://generate-secret.vercel.app/32)
AUTH_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxx"

# next auth base url
NEXTAUTH_URL=http://localhost:3000

# github auth keys
GITHUB_CLIENT_ID=xxxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# google auth keys
GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# resend api key
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
RESEND_API_EMAIL="onboarding@resend.dev"
```

5. Set up a Neon PostgreSQL Database

1. **Obtain PostgreSQL Database URL:**

   - If you don't have a Neon PostgreSQL database, create one.
   - Obtain the database URL, which typically looks like `postgresql://<username>:<password>@<host>:<port>/<database-name>`.

1. **Update `.env` with Database Configuration:**

   - Open your `.env` file.
   - Update the following variables with your Neon PostgreSQL database information:

     ```bash
     # .env

     # Neon PostgreSQL db
     DATABASE_URL="postgresql://<your-neondb-username>:<your-neondb-password>@<your-neondb-host>:<your-neondb-port>/next-auth?sslmode=require&pgbouncer=true"
     DIRECT_URL="postgresql://<your-neondb-username>:<your-neondb-password>@<your-neondb-host>:<your-neondb-port>/next-auth?sslmode=require"
     ```

1. Generate Authentication Secret

1. **Generate Random Authentication Secret:**

   - Visit [generate-secret.vercel.app](https://generate-secret.vercel.app/32).
   - Copy the generated secret.

1. **Update `.env` with Authentication Secret:**

   - Open your `.env` file.
   - Update the `AUTH_SECRET` variable with the generated secret:

     ```bash
     # .env

     # Random auth secret
     AUTH_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxx"
     ```

1. Configure NextAuth Base URL

1. **Set NextAuth Base URL:**

   - Open your `.env` file.
   - Set the `NEXTAUTH_URL` variable to the base URL of your Next.js application:

     ```bash
     # .env

     # NextAuth base URL
     NEXTAUTH_URL=http://localhost:3000
     ```

1. Obtain GitHub Authentication Keys

1. **Register Application on GitHub:**

   - Go to the [GitHub Developer Settings](https://github.com/settings/developers) and register a new OAuth application.
   - Obtain the client ID and client secret.

1. **Update `.env` with GitHub Keys:**

   - Open your `.env` file.
   - Update the following variables with the obtained GitHub keys:

     ```bash
     # .env

     # GitHub auth keys
     GITHUB_CLIENT_ID=xxxxxxxxxxxxxx
     GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```

1. Obtain Google Authentication Keys

1. **Register Application on Google Cloud Console:**

   - Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
   - Enable the "Google+ API" for your project and create credentials to obtain the client ID and client secret.

1. **Update `.env` with Google Keys:**

   - Open your `.env` file.
   - Update the following variables with the obtained Google keys:

     ```bash
     # .env

     # Google auth keys
     GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
     GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```

1. Set Up Resend API Key

1. **Obtain Resend API Key and Email:**

   - Obtain an API key and email from Resend for onboarding purposes.

1. **Update `.env` with Resend API Key and Email:**

   - Open your `.env` file.
   - Update the following variables with the obtained Resend API key and email:

     ```bash
     # .env

     # Resend API key and email
     RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     RESEND_API_EMAIL="onboarding@resend.dev"
     ```

1. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

1. Now app is fully configured 👍 and you can start using this app using `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Server Components](/.github/images/img2.png "Server Components")

![Client Components](/.github/images/img3.png "Client Components")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")

## :gem: Acknowledgements

Useful resources and dependencies that are used in Next.

- Thanks to CodeWithAntonio: https://codewithantonio.com/
- **[@prisma/client](https://www.npmjs.com/package/@prisma/client)**: ^5.7.0
- **[@auth/prisma-adapter](https://www.npmjs.com/package/@auth/prisma-adapter)**: ^1.0.12
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)**: ^3.3.3
- **[@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar)**: ^1.0.4
- **[@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog)**: ^1.0.5
- **[@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu)**: ^2.0.6
- **[@radix-ui/react-icons](https://www.npmjs.com/package/@radix-ui/react-icons)**: ^1.3.0
- **[@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label)**: ^2.0.2
- **[@radix-ui/react-select](https://www.npmjs.com/package/@radix-ui/react-select)**: ^2.0.0
- **[@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot)**: ^1.0.2
- **[@radix-ui/react-switch](https://www.npmjs.com/package/@radix-ui/react-switch)**: ^1.0.3
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: ^5.1.1
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: ^2.4.3
- **[class-variance-authority](https://www.npmjs.com/package/class-variance-authority)**: ^0.7.0
- **[clsx](https://www.npmjs.com/package/clsx)**: ^2.1.0
- **[next](https://www.npmjs.com/package/next)**: 14.0.4
- **[next-auth](https://www.npmjs.com/package/next-auth)**: ^5.0.0-beta.4
- **[next-themes](https://www.npmjs.com/package/next-themes)**: ^0.2.1
- **[react](https://www.npmjs.com/package/react)**: ^18
- **[react-dom](https://www.npmjs.com/package/react-dom)**: ^18
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form)**: ^7.49.2
- **[react-icons](https://www.npmjs.com/package/react-icons)**: ^4.12.0
- **[react-spinners](https://www.npmjs.com/package/react-spinners)**: ^0.13.8
- **[resend](https://www.npmjs.com/package/resend)**: ^2.1.0
- **[sonner](https://www.npmjs.com/package/sonner)**: ^1.3.1
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: ^2.2.0
- **[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)**: ^1.0.7
- **[uuid](https://www.npmjs.com/package/uuid)**: ^9.0.1
- **[zod](https://www.npmjs.com/package/zod)**: ^3.22.4
- **[@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt)**: ^5.0.2
- **[@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)**: ^2.4.6
- **[@types/node](https://www.npmjs.com/package/@types/node)**: ^20
- **[@types/react](https://www.npmjs.com/package/@types/react)**: ^18
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: ^18
- **[@types/uuid](https://www.npmjs.com/package/@types/uuid)**: ^9.0.7
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer)**: ^10.0.1
- **[eslint](https://www.npmjs.com/package/eslint)**: ^8
- **[eslint-config-next](https://www.npmjs.com/package/eslint-config-next)**: 14.0.4
- **[postcss](https://www.npmjs.com/package/postcss)**: ^8
- **[prisma](https://www.npmjs.com/package/prisma)**: ^5.7.1
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)**: ^3.3.0
- **[typescript](https://www.npmjs.com/package/typescript)**: ^5

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
