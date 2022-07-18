# Next.js TypeScript Starter

Have you ever started a Next.js project from scratch and found yourself trying to get ESLint, Prettier, and Stylelint to play nice? What about setting up a `<Layout>` component, Tailwind CSS, and `types`?

If so, this is the starter for you! It's just enough "boilerplate" to get you up and running, without being so opinionated that you have to teardown.

Start coding your next big idea _right now_, with the Next.js TypeScript Starter!

## ✨ Features

- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Markdownlint](https://github.com/DavidAnson/markdownlint), and [Prettier](https://prettier.io/)
- [JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- Basic `<Layout>` component
- [Experimental Image Support](https://nextjs.org/blog/next-12-2#improvements-to-nextimage)
- Github Action workflow for linting PRs

---

## Getting Started

First, install the dependencies:

```bash
npx create-next-app my-awesome-app --example https://github.com/gregrickaby/nextjs-typescript-starter --use-npm
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

## Linting

Lint your code:

```bash
npm run lint
```

Format your code:

```bash
npm run format
```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
