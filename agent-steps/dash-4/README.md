# Dash-4 — Koraci agenta

Ovaj dokument beleži korake izrade `dash-4` projekta.

## 1. Početni prompt i procena kvaliteta

Početni prompt je **dobar** jer jasno definiše:

- tehnologiju (React + TypeScript)
- funkcionalne celine (Overview, Users, Workouts, Subscription plans, Settings)
- arhitekturu foldera (`components`, `features`, `pages`, `hooks`, `utils`, `types`)
- zahtev za reusable komponentama i tabelama sa tačno zadatim kolonama
- zahteve za search/filter/sort/charts/responsive

Šta može bolje:

- nije tražen konkretan standard za validaciju forme ili paginaciju
- nije definisan tačan vizuelni dizajn sistem (tema, tipografija, spacing tokens)
- nije definisan test setup (unit/e2e)

## 2. Scaffolding i zavisnosti

- Kreiran projekat: `pnpm create vite dashboards/dash-4 --template react-ts`
- Dodate runtime zavisnosti:
  - `react-router-dom`
  - `recharts`
- Dodate dev zavisnosti:
  - `tailwindcss`
  - `@tailwindcss/vite`

## 3. Tailwind v4 integracija

- U `vite.config.ts` dodat plugin `@tailwindcss/vite`
- U `src/index.css` dodat `@import "tailwindcss"`

## 4. Implementacija arhitekture

Kreirani folderi i slojevi:

- `src/components`
- `src/features`
- `src/pages`
- `src/hooks`
- `src/utils`
- `src/types`

Implementirane reusable komponente:

- `Button`
- `Card`
- `Modal`
- `Input`
- `Select`
- `Table`

## 5. Funkcionalnosti

- `Overview`:
  - metrike (Total Users, Active Users, Total Workouts, Avg Calories)
  - line chart, bar chart, pie chart
- `Users management`:
  - tabela sa kolonama: `name`, `email`, `plan`, `status`, `lastWorkout`
  - search
  - filter po planu
  - sortiranje po imenu
- `Workouts`:
  - tabela: `user`, `type`, `duration`, `calories`, `date`, `status`
  - filter po tipu treninga i statusu
- `Subscription plans`:
  - pregled planova i UI simulacija promene plana
- `Settings`:
  - feature toggles (dark mode, notifikacije, weekly reports, trial extensions)

## 6. Verifikacija

Pokrenut build:

```bash
pnpm build
```

Rezultat: build uspešan (`tsc -b && vite build`).

## 7. Pokretanje projekta

```bash
cd dashboards/dash-4
pnpm install
pnpm dev
```

## 8. Naknadne ispravke i poboljšanja

Nakon inicijalne verzije urađen je dodatni review i implementiran je set korekcija.

### 8.1 Dark mode i tema

- Uvedena je perzistencija settings stanja kroz `localStorage`.
- Dark mode sada ostaje aktivan i nakon reload-a stranice.
- Uvedene su centralne CSS varijable za light/dark temu (`--bg-app`, `--bg-surface`, `--text-primary`, `--text-muted`, `--border-color`, itd.).
- Shared komponente su prebačene sa hardkodovanih boja na theme tokene:
  - `Button`
  - `Card`
  - `Input`
  - `Select`
  - `Modal`
  - `Table`

### 8.2 Navigacija i kontrast

- Ispravljena je čitljivost sidebar linkova u dark modu.
- Header i overlay elementi sada koriste theme varijable umesto fiksnih light vrednosti.

### 8.3 Responsive UX za Users

- Umesto oslanjanja samo na horizontalni scroll tabele, dodat je mobile card prikaz korisnika.
- Desktop tabela je zadržana za veće ekrane (`md+`), a mobile prikaz je optimizovan za čitljivost i preglednost.

### 8.4 Charts u dark modu

- Charts su usklađeni sa temom (grid, ose, legenda, tooltip i boje serija).
- Time je poboljšana čitljivost analitike u tamnoj temi.

## 9. Verifikacija nakon poboljšanja

Ponovo je pokrenut build:

```bash
pnpm build
```

Rezultat: build uspešan bez TypeScript grešaka.
