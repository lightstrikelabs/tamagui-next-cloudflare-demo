# Cloudflare Next.js Demo Lightstrike - Monorepo

This is a monorepo containing a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and deployed to Cloudflare Workers.

## Project Structure

```
├── apps/
│   └── next/          # @lightstrikelabs/cloudflare-next application
├── packages/           # Shared packages (future use)
├── package.json        # Root workspace configuration
└── pnpm-workspace.yaml # PNPM workspace configuration
```

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
# or
pnpm --filter @lightstrikelabs/cloudflare-next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `apps/next/src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to Cloudflare Workers
- `pnpm preview` - Preview the deployment
- `pnpm cf-typegen` - Generate Cloudflare types

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Workers

This project is configured to deploy to Cloudflare Workers using OpenNext. Use the following commands:

```bash
pnpm deploy
```

Check out the [OpenNext documentation](https://opennext.js.org/) for more details about deploying Next.js to Cloudflare Workers.
