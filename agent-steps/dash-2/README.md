Dokument koraka za izradu dashboarda (srpski, ekavica)

1. Opis zadatka

Zadatak: kreirati admin dashboard za fitness aplikaciju koristeći React + TypeScript (Vite), Tailwind CSS v4 i Chart.js. Potrebne stranice: Overview, Users, Workouts, Analytics. Funkcionalnosti uključuju: pretragu, sortiranje, client-side paginaciju, filtere po datumu i tipu, osnovni CRUD UI (mock), i mock dataset (~200 korisnika, ~500 treninga).

2. Zašto je prompt dobar

- Jasno navodi tehnologije i glavne funkcionalne zahteve, što omogućava agentu da scaffolduje projekat i odabere kompatibilne zavisnosti.
- Zahtev za mock dataset-om i strukturom direktorijuma omogućava reprodukovanje i brzo testiranje interfejsa bez backend-a.

3. Ograničenja prompta

- Nije specificiran nivo detalja UX-a (npr. modal vs inline edit, tačne kolone), pa su neke implementacione odluke prepuštene agentu.
- Nema zahteva za perzistencijom ili performansama pri većem broju zapisa; trenutno rešenje koristi lokalno generisane podatke.

4. Koraci koje je agent izvršio

- Scaffold-ovan Vite + React + TypeScript projekat u `dashboards/dash-2`.
- Generisan mock dataset u `src/data/mock.ts` (~200 korisnika, ~500 treninga).
- Implementirane stranice: `Overview`, `Users`, `Workouts`, `Analytics` u `src/pages`.
- Dodate osnovne komponente: `Sidebar`, tabele/list view, paginacija i filteri.
- Integrisan Chart.js (`react-chartjs-2`) za line/bar/pie grafikone; pie klik pokreće drill-down filter.
- Rešeni konflikti vezani za Tailwind instalaciju - prilagođena konfiguracija u `vite.config.ts` i `src/index.css`.

5. Predlozi za dalje radove

- Dodati modalne forme za create/edit korisnika i treninga i sačuvati izmene u `localStorage`.
- Dodati API adapter za lako prebacivanje na backend.
- Poboljšati pristupačnost (aria oznake, fokus, kontrast) i dodati jednostavne testove komponenata.

6. Lokacije fajlova

- Projekat izvori: `dashboards/dash-2/`
- Agent-steps dokumentacija (ovo): `agent-steps/dash-2/README.md`
- Transkript razgovora: `agent-steps/dash-2/CHAT.md`

Ako želite, mogu odmah dodati forme za edit/create i `localStorage` persistenciju.
