# Eddie Tuell — Portfolio

Personal portfolio site for Eddie Tuell: Full Stack Software Engineer II at CHAS Health,
focused on AI Core, an LLM orchestration service for clinical applications.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Vercel Edge Function (AI resume chat widget, backed by the Anthropic API)

## Local development

Requires Node.js & npm (recommend installing via [nvm](https://github.com/nvm-sh/nvm)), and the
[Vercel CLI](https://vercel.com/docs/cli) if you want the `/api` route working locally.

```sh
git clone <this-repo-url>
cd ai-solutions-portfolio
npm i
npm run dev        # frontend only — the AI chat widget's API call will 404
vercel dev         # frontend + /api/resume-chat, for testing the chat widget locally
```

## Environment variables

The AI resume chat widget (`src/components/AIChatWidget.tsx`) calls `api/resume-chat.ts`,
a Vercel Edge Function that proxies to the Anthropic API. It needs an `ANTHROPIC_API_KEY`
environment variable set in your Vercel project (Project Settings → Environment Variables).
There's no frontend `.env` needed for this — the key is only ever read server-side by the
Edge Function.

## Deployment

Deployed on Vercel: the static site builds from `dist/`, and `api/resume-chat.ts` deploys
automatically as a Vercel Edge Function alongside it.
