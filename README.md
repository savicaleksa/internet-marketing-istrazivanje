# Primena AI agenata u izradi frontend aplikacije: analiza uticaja prompt konteksta na kvalitet generisanog React admin dashboarda

## 1. Uvod

Razvoj frontend aplikacija uz AI agente značajno ubrzava implementaciju, ali kvalitet rezultata snažno zavisi od kvaliteta prompta i načina vođenja iterativnog razgovora. Ovaj rad analizira tri uzastopno generisana dashboard projekta (`dash-1`, `dash-2`, `dash-3`) i njihove zapisnike (`agent-steps`) kako bi se procenilo kako promena prompt konteksta utiče na arhitekturu, UX/UI, modularnost i održivost rešenja.

Poseban fokus je na činjenici da su sva tri dashboarda inicijalno generisana „lošim“ promptovima, ali su kroz iteracije i dopunu konteksta postepeno unapređivana.

---

## 2. Precizna formulacija istraživačkog problema

**Naziv teme:**

Primena AI agenata u izradi frontend aplikacije: analiza uticaja prompt konteksta na kvalitet generisanog React admin dashboarda.

**Istraživački problem:**

U kojoj meri količina i kvalitet konteksta datog AI agentu utiču na arhitekturu, upotrebljivost, skalabilnost i kvalitet frontend aplikacije generisane korišćenjem React okruženja?

**Konkretno pitanje:**

Da li detaljno strukturisan prompt dovodi do značajno kvalitetnijeg admin dashboarda u poređenju sa minimalnim promptom?

---

## 3. Cilj istraživanja

Cilj rada je da ispita:

- Uticaj kontekstualnog promptovanja na kvalitet frontend koda.
- Razlike u arhitekturi aplikacije.
- Razlike u UX/UI rešenjima.
- Razlike u organizaciji komponenti.
- Razlike u skalabilnosti rešenja.

---

## 4. Hipoteze

- **H1:** Dashboard generisan uz bogat kontekst ima bolju komponentnu arhitekturu od dashboarda generisanog minimalnim promptom.
- **H2:** Dashboard generisan uz detaljan prompt pokazuje veću modularnost i reusability komponenti.
- **H3:** UX i vizuelna konzistentnost su značajno bolji kod rešenja generisanog uz bogat prompt.
- **H4:** Vreme potrebno za doradu i ispravke je kraće kod verzije generisane uz bogat prompt.
- **H5:** Broj tehničkih nedostataka (anti-patterns, loša organizacija state-a, dupliranje koda) je manji kod bogatog prompta.

Napomena: U ovom eksperimentu nijedna verzija nije startovala sa „dobrim“ promptom; posmatra se relativno poboljšanje kroz iteracije i dodavanje konteksta.

---

## 5. Opis sistema: Fitness Tracking Admin Panel

Analizirani sistem je admin dashboard za fitness platformu, sa sledećim očekivanim funkcionalnim celinama:

1. **Overview (Analytics)** — ključne metrike i grafikoni.
2. **Users Management** — tabela korisnika, pretraga, filteri/sortiranje, akcije.
3. **Workouts** — lista treninga sa atributima i statusom.
4. **Subscription Management (UI only)** — pregled planova i simulacija promena plana.
5. **Settings** — feature toggles, dark mode, notifikacije.

---

## 6. Metodologija istraživanja

### 6.1 Eksperimentalni uslovi

Analizirane su tri verzije:

- **Verzija A:** `dash-1` (minimalan prompt, široko zadat problem).
- **Verzija B:** `dash-2` (detaljniji, strukturiran prompt sa više funkcionalnih zahteva).
- **Verzija C:** `dash-3` (polustrukturiran prompt, više proceduralan nego kvalitetno specifikovan).

Sve verzije su:

- React frontend projekti (Vite + TypeScript),
- bez backend-a,
- sa mock podacima,
- fokusirane na iste osnovne domenske celine.

### 6.2 Evaluacioni kriterijumi

Evaluacija je rađena prema kriterijumima iz instrukcija:

1. Arhitektura
2. Modularnost
3. Upravljanje stanjem
4. UX/UI kvalitet
5. Održivost i skalabilnost
6. Količina intervencija developera

### 6.3 Metode prikupljanja podataka

- **Kvantitativno:** broj `src` fajlova, broj linija koda, broj stranica/komponenti.
- **Kvalitativno:** pregled promptova, analiza razgovora sa agentom, analiza implementacije i uočenih grešaka.

---

## 7. Implementacija i evolucija prompt konteksta

### 7.1 Verzija A (`dash-1`) — minimalan i neprecizan prompt

Početni prompt je bio visokog nivoa: traži „admin dashboard za fitness aplikaciju“ sa korisnicima, treninzima i analitikom, „moderno“ i „grafike“, bez preciznih nefunkcionalnih zahteva.

**Posledice u implementaciji:**

- Nema rutiranja (switch preko lokalnog state-a).
- `Users` ima samo pretragu (bez sortiranja/paginacije/CRUD akcija).
- `Workouts` je samo prikaz liste.
- `Analytics` je integrisan u `Overview`, nema zasebnu stranicu.
- Mock dataset je mali i statičan (3 korisnika, 3 treninga).

### 7.2 Verzija B (`dash-2`) — detaljan strukturisan prompt

Prompt eksplicitno navodi stack, obavezne stranice (`Overview`, `Users`, `Workouts`, `Analytics`), očekivane funkcije (pretraga, sortiranje, paginacija, CRUD UI), veličinu dataseta (~200/500), i željeni UX (card-based, responsive).

**Posledice u implementaciji:**

- Uveden `react-router-dom` i jasna navigacija po rutama.
- `Users`: pretraga + sortiranje + paginacija + delete akcija.
- `Workouts`: filteri po tipu i datumu + delete akcija.
- `Analytics`: line/bar/pie + drill-down callback.
- Dataset je generisan i skaliran (200 korisnika, 500 treninga).

### 7.3 Verzija C (`dash-3`) — proceduralan prompt sa manjim fokusom na kvalitet

Prompt je detaljan u koracima setup-a (scaffold, instalacija, deliverables), ali manje precizan u domenskim i kvalitetnim kriterijumima u odnosu na verziju B.

**Posledice u implementaciji:**

- Postoje sve osnovne stranice i rutiranje.
- `Users` i `Workouts` imaju CRUD UI i paginaciju.
- Dataset je srednje veličine (23 korisnika, 60 treninga).
- Deo analitike je „demo“ karaktera (npr. random vrednosti u grafikonu).
- Manja konzistentnost tipova/status vrednosti i manje robustna semantika podataka.

---

## 8. Komparativna analiza

### 8.1 Razlike u promptovima i razgovoru sa AI agentom

| Verzija | Kvalitet početnog prompta | Nivo konteksta | Interakcija sa agentom | Efekat na rezultat |
|---|---|---|---|---|
| dash-1 | Nizak (opšti zahtevi) | Mali | Više korektivnih intervencija nakon grešaka | Osnovni MVP, nepotpuna funkcionalnost |
| dash-2 | Najviši među posmatranim | Visok | Iteracije ciljano usmerene na feature set i tehničke ispravke | Najuravnoteženije i najupotrebljivije rešenje |
| dash-3 | Srednji | Srednji | Fokus na proceduralne korake i isporuku fajlova | Funkcionalno, ali slabije konceptualno od dash-2 |

### 8.2 Kvantitativni pregled (izvorni kod `src`)

| Verzija | Broj `src` fajlova (`.ts/.tsx/.css`) | Linije koda (`src`) | Broj stranica | Broj komponenti (folder `components`) |
|---|---:|---:|---:|---:|
| dash-1 | 9 | 368 | 3 | 1 |
| dash-2 | 10 | 553 | 4 | 1 |
| dash-3 | 10 | 672 | 4 | 1 |

Tumačenje: više linija ne znači automatski bolji kvalitet; `dash-3` ima više koda od `dash-2`, ali je `dash-2` konzistentniji po domenskoj logici i tipu podataka.

### 8.3 Kvalitativna ocena po kriterijumima (1–5)

| Kriterijum | dash-1 | dash-2 | dash-3 | Komentar |
|---|---:|---:|---:|---|
| Arhitektura | 2 | 4 | 3 | `dash-2` najjasnije razdvaja stranice, podatke i tok filtriranja. |
| Modularnost | 2 | 3 | 3 | Sve verzije imaju ograničen broj reusable UI komponenti; `dash-2/3` bolje od `dash-1`. |
| Upravljanje stanjem | 2 | 3 | 3 | `dash-1` minimalan state; `dash-2/3` centralniji state i propagacija kroz props. |
| UX/UI kvalitet | 2 | 4 | 3 | `dash-2` najbliže traženom card-based/responsive stilu. |
| Skalabilnost | 2 | 4 | 3 | Veliki mock dataset i tipizacija u `dash-2` olakšavaju proširenje. |
| Intervencije developera | 2 | 3 | 3 | Najviše ručnih korekcija kod Tailwind setup-a i konfiguracije build alata. |

---

## 9. Najčešće greške tokom generisanja

Na osnovu `agent-steps` i koda, najčešće greške su:

1. **Konfuzija oko Tailwind v4 integracije**
	- Mešanje starih i novih pristupa (`postcss`/konfig fajlovi vs `@tailwindcss/vite` plugin).
	- Više korektivnih iteracija oko `vite.config.ts` i `index.css`.

2. **Nedovoljno precizno definisan scope funkcionalnosti**
	- Kod minimalnih promptova funkcije poput paginacije, sortiranja, CRUD-a i drill-down ponašanja ostaju parcijalne ili izostaju.

3. **Nedoslednost između UI zahteva i implementacije**
	- Primer: dashboard traži određene celine (Subscription/Settings), ali one nisu dosledno implementirane u svim verzijama.

4. **Tipizacija i kvalitet API ugovora unutar frontenda**
	- Upotreba `any` na mestima gde je moguće koristiti jasne tipove.
	- Nekonzistentne status vrednosti i model podataka između verzija.

5. **Dokumentacijska nedoslednost i dupliranje**
	- README sadržaji delimično duplirani ili mešani sa template tekstom.

---

## 10. Diskusija: kako su iteracije i dodatni kontekst unapredili rezultat

U sva tri slučaja vidi se isti obrazac:

- **Korak 1 (slab prompt):** agent proizvodi ispravno pokrenut projekat, ali funkcionalno i arhitekturno nedovoljno definisan.
- **Korak 2 (dopuna konteksta):** uvode se precizni feature zahtevi i merljivi deliverables, pa rezultat postaje sistematičniji.
- **Korak 3 (korektivni razgovor):** kroz povratne informacije korisnika rešavaju se konkretne tehničke greške (posebno tooling i konfiguracija).

Najbolje poboljšanje je zabeleženo kada prompt sadrži:

- eksplicitan tech stack,
- tačno nabrojane funkcionalnosti po stranici,
- očekivani obim podataka,
- jasne granice MVP-a,
- i kriterijume kvaliteta UI-a.

---

## 11. Zaključak

Analiza potvrđuje da kvalitet i struktura prompt konteksta imaju direktan uticaj na kvalitet generisanog React admin dashboarda.

- **H1:** potvrđena (arhitektura bolja uz bogatiji prompt).
- **H2:** delimično potvrđena (modularnost je bolja, ali i dalje ograničena).
- **H3:** potvrđena (vizuelna konzistentnost i UX su bolji uz detaljniji prompt).
- **H4:** delimično potvrđena (i dalje su potrebne intervencije, posebno oko toolchain-a).
- **H5:** potvrđena (manje anti-pattern problema kada je kontekst precizniji).

Najkvalitetniji rezultat u ovom skupu je `dash-2`, jer najbolje balansira funkcionalni obim, domensku logiku i održivost koda. `dash-1` demonstrira tipične posledice nedovoljnog prompt konteksta, dok `dash-3` pokazuje da proceduralna detaljnost bez dovoljno kvalitetnih domenskih kriterijuma ne garantuje najbolje rešenje.

---

## 12. Ograničenja i moguća dalja istraživanja

**Ograničenja:**

- Uzorak je mali (3 projekta) i svi su inicijalno vođeni „lošim“ promptovima.
- Nije rađeno formalno merenje vremena razvoja po fazama, već kvalitativna procena kroz dokumentaciju i kod.

**Dalja istraživanja:**

- Uvesti kontrolisani eksperiment „minimalan vs bogat prompt“ na većem broju iteracija.
- Dodati formalne metrike kvaliteta (lint score, complexity, test coverage).
- Meriti vreme do upotrebljivog MVP-a i broj naknadnih izmena po verziji.

---

## 13. Naučni doprinos

Ovaj rad doprinosi praktičnom razumevanju kako prompt inženjering utiče na AI-generisan frontend kod i nudi konkretne smernice za efikasniji rad sa agentima:

- Precizirati funkcionalni scope po stranicama.
- Uvesti merljive deliverables i kriterijume kvaliteta.
- Planirati iterativni feedback ciklus kao obavezan deo procesa.
