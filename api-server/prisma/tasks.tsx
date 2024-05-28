import { Task, TaskCategory, TaskDifficulty } from '../../@types/common';
import React from 'react';

export const tasks: Task[] = [
  {
    title: 'Vis felter for kategori og vanskelighetsgrad',
    content: (
      <div>
        <p>
          Oppgavene har ubrukte felter for kategori(<code>category</code>) og vanskelighetsgrad(
          <code>difficulty</code>).
        </p>
        <p>
          Vis disse feltene i oppgave-kortene og stil dem slik at de skiller fra resten av
          oppgaveteksten.
        </p>
      </div>
    ),
    category: [TaskCategory.CODING, TaskCategory.STYLING],
    difficulty: TaskDifficulty.EASY,
  },
  {
    title: 'Sorter oppgaver etter vanskelighetsgrad',
    content: (
      <div>
        <p>Sorter oppgavene etter vanskelighetsgrad. Lette oppgaver øverst.</p>
      </div>
    ),
    category: [TaskCategory.CODING, TaskCategory.STYLING],
    difficulty: TaskDifficulty.EASY,
  },
  {
    title: 'Styling ved drag & drop',
    content: 'Legg til stiling som gjør at oppgavekort roteres (10°) når de dras mellom kolonner.',
    category: [TaskCategory.STYLING],
    difficulty: TaskDifficulty.EASY,
  },
  {
    title: 'Marker oppgave som ferdig',
    content: (
      <div>
        <p>
          Merk oppgave som "ferdig" når den dras inn i den siste kolonnen. Oppgaven skal være "åpen"
          dersom den befinner seg i en annen kolonne.
        </p>
      </div>
    ),
    category: [TaskCategory.CODING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Lagre kolonnetilhørighet når oppgave flyttes',
    content: (
      <div>
        <p>
          Lagre info om hvilken kolonne en oppgave har blitt dradd til, slik at tilstanden vedvarer
          om vi laster siden på nytt.
        </p>
        <p>
          En mulig løsning er å bruke <code>PUT</code> på endepunktet{' '}
          <code>http://localhost:5001/task/:id</code>
        </p>
        <p>
          (Her kan må du mest sannsynlig få litt hjelp til utforming av <code>request body</code>)
        </p>
      </div>
    ),
    category: [TaskCategory.CODING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Manuell sortering av oppgaver',
    content: (
      <div>
        Gjør det mulig å manuelt sortere rekkefølgen av oppgavene i en kolonne.{' '}
        <a
          href="https://docs.dndkit.com/presets/sortable"
          target="_blank"
          rel="noopener noreferrer">
          Her finner du dokumentasjon til biblioteket vi bruker
        </a>
        .
      </div>
    ),
    category: [TaskCategory.CODING],
    difficulty: TaskDifficulty.HARD,
  },
  {
    title: 'Sett fast høyde på brettet',
    content:
      'Gjør slik at scrolling skjer inni kolonnene, slik at selve brettet aldri blir høyere en skjermhøyden',
    category: [TaskCategory.STYLING],
    difficulty: TaskDifficulty.EASY,
  },
  {
    title: 'Lagring av rekkefølge',
    content: (
      <span>
        Lagre rekkefølgen dersom kortene sorteres manuelt, slik at den blir ivaretatt om siden
        lastes på nytt. <a href="#task-2">Gjøres etter sorterings-oppgaven</a>
      </span>
    ),
    category: [TaskCategory.CODING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Legg til flere kolonner',
    content: 'Gjør det mulig å legge til flere kolonner i brettet.',
    category: [TaskCategory.CODING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Drøfting: Responsivitet',
    content: 'Kan vi gjøre dette brettet brukervennlig på mobil? Hvordan? Hjelp!',
    category: [TaskCategory.STYLING, TaskCategory.DISCUSSION],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Gjem beskrivelse på oppgaver som default',
    content:
      'Vis kun tittel på oppgavene i brettet som default. Ekspander til å vise beskrivelse ved klikk på oppgave.',
    category: [TaskCategory.CODING, TaskCategory.STYLING],
    difficulty: TaskDifficulty.EASY,
  },
  {
    title: 'Filtrer oppgaver',
    content:
      'Legg til en filterfunksjon som lar brukeren filtrere oppgavene etter kategori og vanskelighetsgrad.',
    category: [TaskCategory.CODING, TaskCategory.STYLING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Accessibility (a11y) - hvofor er dette vikitg? Endre koden til å bli mer tilgjengelig',
    content: (
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              gridColumn: '1 / span 2',
            }}>
            Registreringsskjema <img src="src/assets/pen-icon.jpg" width="20" height="20"></img>
          </div>
          <span>Navn:</span>
          <input type="text"></input>
          <span>Adresse:</span>
          <input type="text"></input>
          <span>Telefon:</span>
          <input type="text"></input>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gridColumn: '1 / span 2',
            }}>
            <input
              style={{
                backgroundColor: '#04AA6D',
                color: '#FFFFFF',
                borderColor: '#035436',
                borderRadius: '0.2rem',
              }}
              type="submit"
              value="Send"></input>
          </div>
        </div>
      </section>
    ),
    category: [TaskCategory.A11Y],
    difficulty: TaskDifficulty.UNKNOWN,
  },
  {
    title: 'Vis værmelding i header',
    content: (
      <span>
        Bruk et åpent API (f.eks fra{' '}
        <a href="https://api.met.no/" target="_blank" rel="noopener noreferrer">
          Meteorologisk institutt
        </a>
        ) for å hente været på din nåværenede lokasjon og vise det i headeren.
      </span>
    ),
    category: [TaskCategory.CODING, TaskCategory.STYLING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Lag din egen oppgave!',
    content:
      "Lag en oppgave som for å implementere noe nyttig/kult i denne løsningen. Sky's the limit! 🚀",
    category: [
      TaskCategory.CODING,
      TaskCategory.STYLING,
      TaskCategory.DISCUSSION,
      TaskCategory.A11Y,
      TaskCategory.TESTING,
    ],
    difficulty: TaskDifficulty.UNKNOWN,
  },
  {
    title: 'Kanskje vi skulle hatt noen tester?',
    content: 'Vi har Jest som avhengighet i prosjektet, men ingen tester. Hva med å lage noen? 😅',
    category: [TaskCategory.TESTING],
    difficulty: TaskDifficulty.MEDIUM,
  },
  {
    title: 'Drøfting: Kodestruktur',
    content: 'Hva synes du om strukturen på koden? Hva kan gjøres bedre?',
    category: [TaskCategory.DISCUSSION],
    difficulty: TaskDifficulty.UNKNOWN,
  },
  {
    title: 'Drøfting: CSS',
    content:
      'Hva synes du om måten CSSen er skrevet på? Burde vi brukt en annen strategi for stiling? I så fall hvilken, og hvorfor?',
    category: [TaskCategory.DISCUSSION],
    difficulty: TaskDifficulty.UNKNOWN,
  },
  {
    title: 'Drøfting: Veien videre',
    content:
      'Ettersom løsningen øker i kompleksitet, blir det vanskeligere å holde oversikt over koden. Hva kan vi gjøre for å gjøre det enklere å vedlikeholde koden?',
    category: [TaskCategory.DISCUSSION],
    difficulty: TaskDifficulty.UNKNOWN,
  },
  {
    title: 'Drøfting: Svakheter',
    content:
      'Vi har skrevet løsningen fort og gæli. Diskuter svakheter ved løsningen og kommunikasjonen mellom frontend og API.',
    category: [TaskCategory.DISCUSSION],
    difficulty: TaskDifficulty.HARD,
  },
];
