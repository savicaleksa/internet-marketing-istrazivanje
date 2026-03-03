---
description: Ovaj dokument pruža detaljne instrukcije za izradu istraživačkog rada na temu primene AI agenata u razvoju frontend aplikacija, sa fokusom na uticaj prompt konteksta na kvalitet generisanog React admin dashboarda.
# applyTo: 'Describe when these instructions should be loaded' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

📌 1. Precizna formulacija istraživačkog problema

Naziv teme:

Primena AI agenata u izradi frontend aplikacije: analiza uticaja prompt konteksta na kvalitet generisanog React admin dashboarda

Istraživački problem:

U kojoj meri količina i kvalitet konteksta datog AI agentu utiču na arhitekturu, upotrebljivost, skalabilnost i kvalitet frontend aplikacije generisane korišćenjem React okruženja?

Konkretno:

Da li detaljno strukturisan prompt dovodi do značajno kvalitetnijeg admin dashboarda u poređenju sa minimalnim promptom?

📌 2. Cilj istraživanja

Cilj rada je da se ispita:

Uticaj kontekstualnog promptovanja na kvalitet frontend koda

Razlike u arhitekturi aplikacije

Razlike u UX/UI rešenjima

Razlike u organizaciji komponenti

Razlike u skalabilnosti rešenja

📌 3. Hipoteze

Možeš postaviti 3–5 hipoteza.

H1:

Dashboard generisan uz bogat kontekst ima bolju komponentnu arhitekturu od dashboarda generisanog minimalnim promptom.

H2:

Dashboard generisan uz detaljan prompt pokazuje veću modularnost i reusability komponenti.

H3:

UX i vizuelna konzistentnost su značajno bolji kod rešenja generisanog uz bogat prompt.

H4:

Vreme potrebno za doradu i ispravke je kraće kod verzije generisane uz bogat prompt.

H5:

Broj tehničkih nedostataka (anti-patterns, loša organizacija state-a, dupliranje koda) je manji kod bogatog prompta.

📌 4. Opis sistema: Fitness Tracking Admin Panel
Kontekst sistema

Admin dashboard za platformu za praćenje fizičke aktivnosti korisnika (fitness aplikacija).

Aplikacija omogućava administratorima da:

Prate korisnike

Analiziraju aktivnosti

Vide metrike performansi

Upravljaju planovima i članarinama

Prate statistiku korišćenja aplikacije

📌 5. Funkcionalne celine dashboarda
1️⃣ Overview (Analytics)

Total Users

Active Users

Total Workouts

Average Calories Burned

Line chart – aktivnosti po danima

Bar chart – tipovi aktivnosti

Pie chart – planovi (Free / Pro)

2️⃣ Users Management

Tabela:

Ime

Email

Plan

Status (Active / Suspended)

Last Workout

Actions (View / Disable)

Funkcionalnosti:

Pretraga

Filter po planu

Sortiranje

3️⃣ Workouts

Lista treninga:

User

Type (Running / Gym / Yoga / Cycling)

Duration

Calories

Date

Status (Completed / In Progress)

4️⃣ Subscription Management (UI only)

Pregled planova

Broj korisnika po planu

Simulacija upgrade/downgrade

5️⃣ Settings

Feature toggles

Dark mode

Notification preferences

📌 6. Metodologija istraživanja
Korak 1 – Definisanje eksperimentalnih uslova

Biće izrađene dve verzije dashboarda:

Verzija A – generisana uz minimalan prompt

Verzija B – generisana uz bogat, strukturiran prompt

Obe verzije:

React

Frontend only

Mock podaci

Isti skup funkcionalnosti

Korak 2 – Evaluacioni kriterijumi
1️⃣ Arhitektura

Struktura foldera

Separation of concerns

Hijerarhija komponenti

2️⃣ Modularnost

Broj reusable komponenti

Postojanje UI biblioteke

Izbegavanje dupliranja

3️⃣ Upravljanje stanjem

Lokalni state vs globalni

Čitljivost logike

Organizacija podataka

4️⃣ UX/UI kvalitet

Vizuelna konzistentnost

Responsivnost

Jasnoća interakcija

5️⃣ Održivost i skalabilnost

Koliko je lako dodati novu sekciju?

Koliko je lako promeniti strukturu podataka?

Postojanje tipizacije (ako koristiš TS)

6️⃣ Količina intervencija developera

Broj ručnih ispravki

Vreme potrebno da aplikacija postane upotrebljiva

Broj bugova

📌 7. Metode prikupljanja podataka

Možeš koristiti:

Kvantitativnu analizu:

Broj fajlova

Broj linija koda

Broj komponenti

Broj reusable elemenata

Kvalitativnu analizu:

Stručna procena arhitekture

Analiza UX-a

Analiza čitljivosti

📌 8. Struktura seminarskog rada

Možeš organizovati rad ovako:

1. Uvod

AI agenti u razvoju softvera

Automatizacija frontend razvoja

Motivacija istraživanja

2. Teorijski okvir

Ovde možeš pomenuti:

OpenAI

GitHub

GitHub Copilot (ako ga pominješ kao primer)

Koncept prompt engineering-a

AI agent-based development

3. Metodologija istraživanja

Opis eksperimenta

Definisanje varijabli

Definisanje kriterijuma evaluacije

4. Implementacija sistema

Opis verzije A

Opis verzije B

5. Komparativna analiza

Tabele poređenja

Grafički prikaz rezultata

Diskusija

6. Zaključak

Da li su hipoteze potvrđene?

Ograničenja istraživanja

Mogućnosti daljih istraživanja

📌 9. Naučni doprinos rada

Rad može doprineti:

Boljem razumevanju granica AI agenata u frontend razvoju

Razumevanju važnosti prompt inženjeringa

Definisanju smernica za efikasnije korišćenje AI alata u praksi
