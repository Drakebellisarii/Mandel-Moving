# Frontend Design Skill — Mandel Moving

You are now in **frontend design mode** for the Mandel Moving project. Follow every step below before writing a single line of HTML or CSS.

---

## Step 1 — Audit Brand Assets

Run this check immediately:
- Look inside `brand_assets/` for logos, color guides, style guides, or images
- If a logo exists → use it, never a placeholder
- If a color palette is defined → extract exact hex values, store them mentally as your primary/secondary/accent tokens
- If no brand assets exist → you will design from scratch (proceed to Step 2)

## Step 2 — Lock In Design Tokens

Before writing code, declare your token decisions in a short internal checklist:

| Token | Decision |
|---|---|
| Primary color | `<hex from brand or chosen>` |
| Heading font | `<Google Font — display or serif>` |
| Body font | `<Google Font — clean sans-serif, different from heading>` |
| Base spacing unit | `<e.g. 8px>` |
| Border radius | `<e.g. 12px>` |
| Shadow style | `<layered, color-tinted, low opacity — never flat shadow-md>` |

Output this table to the user before proceeding.

## Step 3 — Confirm Design Mode Rules

Acknowledge the following hard constraints are active:

- **No default Tailwind palette** (no indigo-500, blue-600, etc.) — custom brand colors only
- **No `transition-all`** — only animate `transform` and `opacity`
- **No flat shadows** — layered, color-tinted only
- **No same font for heading + body** — must be a distinct pair
- **No `file:///` screenshots** — always `http://localhost:3000`
- **No single screenshot pass** — minimum 2 comparison rounds required
- **No adding unrequested sections** — match reference exactly or design only what was asked

## Step 4 — Server Readiness Check

- Confirm `serve.mjs` exists at the project root
- If the server is not already running, start it: `node serve.mjs` (background)
- Confirm the site is reachable at `http://localhost:3000` before any screenshot

## Step 5 — Screenshot Workflow Setup

Confirm:
- `screenshot.mjs` exists at the project root
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented)
- After each screenshot: read the PNG with the Read tool and analyze it visually
- When a reference image exists: compare pixel-level — spacing, font size/weight, colors (exact hex), alignment, border-radius, shadows
- Minimum 2 rounds: screenshot → compare → fix → screenshot → compare → stop only when clean

---

## You Are Now Ready

Respond to the user with:
1. What brand assets were found (or "none found, designing from scratch")
2. Your token table (Step 2)
3. Confirmation that all hard rules are active
4. Server status

Then wait for the user's design instructions.
