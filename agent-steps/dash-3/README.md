Ovaj dokument beleži korake za generisanje `dash-3` administrativnog panela za fitness aplikaciju.

Kratko uputstvo i odabiri:

- Projekat je scaffold-ovan pomoću `pnpm create vite@latest` sa `react-ts` šablonom.
- Zavisnosti su instalirane preko `pnpm add` i `pnpm add -D` (nikakav `package.json` nije upisivan ručno).
- Tailwind v4 je dodat preko `@tailwindcss/vite` plugina i osnovne Tailwind direktive su ubačene u `src/index.css`.

Struktura glavnih fajlova:

- `src/pages/Overview.tsx` — osnovne metrike i linijski graf
- `src/pages/Users.tsx` — tabela sa pretragom, sortiranjem, paginacijom i CRUD UI (mock)
- `src/pages/Workouts.tsx` — lista treninga sa filterima i CRUD UI
- `src/pages/Analytics.tsx` — line/bar/pie grafici, pie podržava drill-down
- `src/data/mock.ts` — generisani mock podaci za korisnike i treninge

Kako pokrenuti:

```bash
cd dashboards/dash-3
pnpm install
pnpm dev
```

Napomena: sve izmene su implementirane u projektu; dodatna podešavanja Tailwind-a nisu potrebna za osnovni rad.

Detaljniji opis izvršenih radnji (srpski, ekavica):

- Cilj: napraviti minimalan, ali funkcionalan admin dashboard za praćenje korisnika, treninga i metrika koristeći React + TypeScript + Vite.
- Scaffold: projekat je kreiran komandnom `pnpm create vite@latest dashboards/dash-3 --template react-ts`.
- Zavisnosti: instalirane su preko `pnpm add` i `pnpm add -D` (ne menjano `package.json` ručno). Instalirane biblioteke obuhvataju `react-router-dom`, `chart.js`, `react-chartjs-2`, kao i `tailwindcss` i `@tailwindcss/vite` kao dev zavisnosti.
- Tailwind integracija: u `vite.config.ts` dodat je plugin `@tailwindcss/vite`, a u `src/index.css` ubačene su Tailwind direktive `@tailwind base`, `@tailwind components` i `@tailwind utilities`.
- Routing i struktura: aplikacija koristi `react-router-dom` i ima osnovne rute za `Overview`, `Users`, `Workouts` i `Analytics`. Glavni layout je podeljen na `Sidebar` i `main` sadržaj.
- Mock podaci: u `src/data/mock.ts` generisani su prosti mockovi za korisnike i treninge, kao i par agregatnih metrika koje koriste stranice.
- Funkcionalnosti:
  - `Overview` prikazuje osnovne metrike i linijski graf.
  - `Users` sadrži klijentsku pretragu, sortiranje, paginaciju i jednostavan CRUD UI (dodavanje/izmena/brisanje u memoriji).
  - `Workouts` sadrži listu treninga sa filterom po tipu, paginacijom i CRUD UI.
  - `Analytics` sadrži line/bar/pie grafike; klik na pie element radi jednostavan drill-down (prikaz izabranog tipa).
- TypeScript i uvozi tipova: tamo gde su importovani tipovi iz `src/data/mock.ts` koristi se sintaksa `import { type X } from '...';` radi jasnijeg razdvajanja vrednosti i tipova.

Dodatne napomene za developere:

- Ako želite da proširite dataset, izmenite `src/data/mock.ts` ili povežite realan API umesto mockova.
- Za promenu vizuala koristite Tailwind utilite u `src/*` komponentama.
- Ako se pojavljuju build-scripts upozorenja pri instalaciji, pokrenite `pnpm approve-builds` po potrebi.
