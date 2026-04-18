# C+R Ticket Sales Dashboard

Live dashboard for Cash & Rocket USA Tour 2026 ticket sales.

**URL:** `https://cr-tickets.vercel.app` (or your chosen subdomain)

## How to Update

When new tickets come in, only **one file** needs updating:

```
src/data.js
```

Send the latest spreadsheet to Claude → get back an updated `data.js` → commit to GitHub → Vercel auto-deploys.

## Setup

### 1. Create GitHub Repo
- Go to github.com → New Repository
- Name: `cr-ticket-dashboard`
- Private repo
- Upload all files from this folder

### 2. Deploy to Vercel
- Go to vercel.com → New Project
- Import from GitHub → select `cr-ticket-dashboard`
- Framework: Vite
- Click Deploy
- (Optional) Set custom domain in Vercel settings

### 3. Auto-Deploy
Every time you push a change to `src/data.js` on GitHub, Vercel will auto-deploy within ~30 seconds.

## Project Structure

```
cr-dashboard/
├── index.html          # Entry point
├── package.json        # Dependencies
├── vite.config.js      # Build config
└── src/
    ├── main.jsx        # React bootstrap
    ├── App.jsx         # Dashboard UI (don't edit)
    └── data.js         # ← UPDATE THIS FILE ONLY
```

## Tech Stack
- React 18 + Vite
- Hosted on Vercel
- No backend needed
