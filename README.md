# Eddie Tuell — Portfolio

Personal portfolio site for Eddie Tuell: Full Stack Software Engineer II at CHAS Health,
focused on AI Core, an LLM orchestration service for clinical applications.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase Edge Functions (AI resume chat widget, backed by the Anthropic API)

## Local development

Requires Node.js & npm (recommend installing via [nvm](https://github.com/nvm-sh/nvm)).

```sh
git clone <this-repo-url>
cd ai-solutions-portfolio
npm i
npm run dev
```

## Environment variables

Create a `.env` file with your Supabase project's values:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_URL=your_supabase_url
```

The AI resume chat widget (`src/components/AIChatWidget.tsx`) calls a Supabase Edge
Function (`supabase/functions/resume-chat`) that proxies to the Anthropic API. That
function needs an `ANTHROPIC_API_KEY` secret set in your Supabase project — it is not
part of this `.env` file, since it's only ever read server-side by the Edge Function.

## Deployment

Deployed as a static site (build output in `dist/`) with the Supabase Edge Function
deployed separately via the Supabase CLI.
