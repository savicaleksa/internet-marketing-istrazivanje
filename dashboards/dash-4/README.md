# Dash-4 — Fitness Tracking Admin Dashboard

Frontend-only admin dashboard za fitness tracking aplikaciju, napravljen u React + TypeScript + Vite okruženju.

## Pokretanje

```bash
cd dashboards/dash-4
pnpm install
pnpm dev
```

## Tehnologije

- React + TypeScript
- Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- Recharts

## Sekcije aplikacije

- Overview (analytics)
- Users management
- Workouts
- Subscription plans
- Settings

## Arhitektura

`src/` je organizovan kroz tražene foldere:

- `components` — reusable UI komponente (`Table`, `Card`, `Modal`, `Button`, `Input`, `Select`)
- `features` — feature-specifični delovi (`overview`, `users`, `workouts`, `data`)
- `pages` — rute i stranice dashboarda
- `hooks` — custom hooks (`useUsers`, `useWorkouts`, `useSettings`)
- `utils` — pomoćne funkcije za formatiranje i sortiranje
- `types` — centralizovani TypeScript tipovi

## Ključne funkcionalnosti

- Users tabela: `name`, `email`, `plan`, `status`, `lastWorkout`
- Search po korisniku (ime/email)
- Filter po planu (`Free`, `Pro`)
- Sortiranje korisnika po imenu
- Workouts tabela: `user`, `type`, `duration`, `calories`, `date`, `status`
- Filter po tipu treninga i statusu
- Charts: line, bar, pie (Recharts)
- Mock podaci i jasno odvojena state logika kroz hooks
- Responsive UI sa sidebar navigacijom
