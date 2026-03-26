# Dash-5 - Fitness Tracking Admin Dashboard

Frontend-only admin dashboard za fitness tracking platformu, napravljen sa Next.js App Router, TypeScript, Tailwind CSS i shadcn/ui komponentama.

## Tehnologije

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Recharts
- Lucide React

## Funkcionalne celine

- Overview
  - KPI kartice: Total Users, Active Users, Total Workouts, Avg Calories
  - Line, Bar i Pie chart
- Users management
  - Search po imenu/email
  - Filter po planu
  - Sort po imenu
  - Desktop tabela + mobile card prikaz
- Workouts
  - Filter po tipu treninga
  - Filter po statusu
  - Desktop tabela + mobile card prikaz
- Subscription plans
  - Prikaz Free/Pro planova
  - UI simulacija promene plana
- Settings
  - Feature toggles
  - Notification preferences
  - Dark mode toggle sa perzistencijom

## Arhitektura

Struktura je organizovana po trazenim slojevima:

- src/app
- src/components
- src/features
- src/hooks
- src/utils
- src/types
- src/data

Sva poslovna logika je izdvojena u hooks, uz strogu TypeScript tipizaciju bez any tipa.

## Tema i dark mode

- Globalni design tokens su definisani u src/app/globals.css.
- Tema se vodi kroz interni ThemeProvider (client context), bez script injection pristupa.
- Izbor teme se cuva u localStorage i ostaje aktivan nakon reload-a.

## Mobile navigacija

- Mobile meni je kontrolisan kao dialog state.
- Klik na stavku navigacije automatski zatvara meni i potom vodi na trazenu stranicu.

## Pokretanje

```bash
cd dashboards/dash-5
pnpm install
pnpm dev
```

Aplikacija je dostupna na http://localhost:3000.

## Provera kvaliteta

```bash
pnpm lint
pnpm build
```

Trenutni status:

- lint prolazi
- production build prolazi

Napomena: pri static prerender koraku Recharts moze prijaviti upozorenje o dimenzijama kontejnera; ne blokira build ni runtime prikaz.
