# Fitness Admin Dashboard — dash-2

Minimalan, responsive admin dashboard za fitness aplikaciju (React + Vite + TypeScript + Tailwind v4 + Chart.js).

Quick start:

```bash
cd dashboards/dash-2
pnpm install
pnpm dev
```

Funkcionalnosti:

- Stranice: Overview, Users, Workouts, Analytics
- Mock dataset: ~200 korisnika i ~500 treninga (generisano u `src/data/mock.ts`)
- Users: pretraga, sortiranje, client-side paginacija, osnovni CRUD UI (lokalno)
- Workouts: filtriranje po tipu i datumu, list view, osnovni CRUD UI
- Analytics: line/bar/pie grafici, klik na pie uradi drill-down (poziva filter)

Struktura:

- `src/` — izvorni kod
  - `data/mock.ts` — generator mock podataka
  - `pages/` — Overview, Users, Workouts, Analytics
  - `components/Sidebar.tsx` — osnovna navigacija

# Fitness Admin Dashboard — dash-2

MVP admin dashboard za fitness aplikaciju (React + Vite + TypeScript + Tailwind v4 + Chart.js).

Quick start

```bash
cd dashboards/dash-2
pnpm install
pnpm dev
```

Glavne funkcionalnosti

- Stranice: Overview, Users, Workouts, Analytics
- Mock dataset: ~200 korisnika i ~500 treninga — `src/data/mock.ts`
- `Users`: pretraga, sortiranje, client-side paginacija, osnovni CRUD UI (mock)
- `Workouts`: filtriranje po tipu i datumu, lista treninga, CRUD UI (mock)
- `Analytics`: line/bar/pie grafici; klik na pie radi drill-down (filteruje Workouts)

Struktura projekta

- `src/`
  - `data/mock.ts` — generator mock podataka (korisnici + treninzi)
  - `pages/` — `Overview.tsx`, `Users.tsx`, `Workouts.tsx`, `Analytics.tsx`
  - `components/Sidebar.tsx` — osnovna navigacija
  - `types.ts` — tipovi `User` i `Workout`

Napomene o Tailwind instalaciji

- Projekat koristi Tailwind v4. Konfiguracija koristi direktan `@import "tailwindcss"` u `src/index.css` i Vite plugin prilagođen dinamičkim importom u `vite.config.ts` da bi se izbegli ESM/CJS problemi.
- Ako želite alternativni setup (PostCSS + `@tailwindcss/postcss`), mogu vratiti `postcss.config.cjs` i prilagoditi podešavanja.

Dalji koraci (predlog)

- Dodati modalne forme za create/edit korisnika i treninga
- Sačuvati izmene u `localStorage` ili dodati API adapter
- Poboljšati pristupačnost: aria oznake, fokusne oblasti, kontrast

Kontakt & razvoj

- Startujte lokalno pomoću komandi iz „Quick start". Ako server prijavi greške pri pokretanju, pošaljite output i ja ću pomoći sa ispravkama.
