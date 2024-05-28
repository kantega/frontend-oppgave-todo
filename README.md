## Innholdsfortegnelse

1. [Velkommen til teknisk intervju!](#velkommen-til-teknisk-intervju)
2. [Hvordan foregår intervjuet?](#hvordan-foregår-intervjuet)
3. [Om koden](#om-koden)
4. [Oppsett](#oppsett)
   1. [Innstaller avhengigheter](#innstaller-avhengigheter)
   2. [Kjør applikasjonen](#kjør-applikasjonen)
5. [For fasilitator](#for-fasilitator)

# Velkommen til teknisk intervju!

Vi jobber for at det å være på intervju hos oss skal være en bra opplevelse. Målet er å ha en god samtale om det å
utvikle programvare, utforske hvordan det er å jobbe sammen med deg, og at du får vist frem noe av det du kan kodemessig.

Vi har satt opp en liten applikasjon som håndterer oppgaver som skal gjøres, kall det et lite task-board. Det mangler
funksjonalitet for det meste, så det er mye som kan implementeres. Det overordnede målet (som ikke vil nås på intervjuet)
er å lage en applikasjon som kan hjelpe utviklingsteam med å håndtere oppgaver i prosjektet på en enkel måte.

Her finnes ingen skjulte agendaer eller snikfeil. Prosjektet er satt sammen for å gi en basis det går an å kode i som
du kan møte i vanlig arbeid. Det er potensiale for både forbedringer og utvidelser, og du blir med å bestemme hvordan vi
videreutvikler kodebasen.

Vi har gjort klar et par oppvarmingsoppgaver som handler om å forstå prosjektet og kodebasen, samt bli kjent med koden ved å
skrive litt kode. Utover det har vi noen forslag til oppgaver, men du står fritt til å foreslå noe der det
ikke finnes noen fasit og vi finner løsningen sammen.

## Hvordan foregår intervjuet?

Bruk noen minutter til å utforske og bli kjent med filene som finnes her, både forretningslogikk og
tester. Det kan være du i forkant har fått beskjed om å fokusere særlig på noen pakker eller filer, i så fall kan du se
vekk fra resten. Om en liten stund setter vi oss sammen, snakker om koden i dette repositoriet, og koder sammen.

Vi ønsker at intervjusituasjonen skal bli så lik en vanlig arbeidssituasjon som mulig, der det er rom for å diskutere
både omfang, arbeidsprosess og gjøre selve problemløsingen både i teori og praksis. Kanskje skriver vi noen tester,
utvider funksjonalitet som allerede finnes, eller tar inn data fra nye datakilder.

## Om koden

Frontend-prosjektet er et lite monorepo bestående av et API og en Web App. Kort fortalt er et monorepo er ett enkelt repository som inneholder flere distinkte prosjekter med definerte relasjoner. I vårt tilfelle bruker Web App APIet for å hente ut og vise data. Disse to pakkene har dermed forskjellige avhengigheter som kan være greit å separere som pakker i et monorepo.

Vi bruker Yarn Workspace, som er Yarn sin innebygde funksjonalitet for monorepo.

## Oppsett

### Workspace

Med Yarn Workspace slipper vi å tenke på avhengigheter. Ved å kjøre `yarn` på rotnivå kjøres også `yarn` i alle prosjekter definert i `package.json` sin `workspaces` liste. I tillegg plasseres alle delte avhengigheter mellom prosjektene i `node_modules` på rotnivå så vi slipper duplikate avhengigheter.

### Innstaller avhengigheter

Først trenger du å ha følgende installert:

- Node v16 eller nyere
  - For Windows: [last ned fra nodejs.org](https://nodejs.org/en/download)
  - For MacOS:
    - [Installer Homebrew](https://brew.sh/): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
    - Installer Node: `brew install node`
- [Yarn v2 eller nyere](https://yarnpkg.com/getting-started/install)
- Installer Corepack for at Yarn Workspace skal fungere
  - Node.js >=16.10: `corepack enable`
  - Node.js <16.10: `npm i -g corepack`

For å installere alle avhengigheter–både i API og Web App–kjør følgende kommando på rotnivå:

`yarn`

#### API

Sett opp API-port ved å redigere `.env.example` til ønsket port og rename filen til `.env`.

Før vi kan kjøre APIet må vi initiere databasen. Det gjøres med følgende kommando på rotnivå:

`yarn api db-init`

For å legge inn data, kjør følgende: 

`yarn api db-seed`

Ved endringer i databasen eller dataene i databasen (etter init), må du kjøre følgende kommando på rotnivå:

`yarn api db-reset`

## Kjør applikasjonen

For å starte applikasjonen, kjør følgende kommandoer i hver sin terminal på rotnivå:
- Backend: `yarn api dev`
- Frontend: `yarn app dev`

Applikasjonen vil da være tilgjengelig på følgende adresse: [http://127.0.0.1:5173/frontend-intervjuoppgaver](http://127.0.0.1:5173/frontend-intervjuoppgaver/).

# For fasilitator

[Se wikien](https://wiki.kantega.no/display/KAN/Hvordan+bruke+frontend-oppgavene) for veiledning.
