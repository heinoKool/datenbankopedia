# 📚 Datenbankopedia

> Moderne Lernplattform für Datenbanken (11. Klasse) – powered by Astro Starlight & Catppuccin Theme

## ✨ Features

- 🎨 **Catppuccin Theme**: Augenschonendes Mocha-Farbschema mit Sky-Akzent
- 📖 **Starlight Framework**: Professionelle Dokumentations-Website mit optimierter Navigation
- 🔍 **Suchfunktion**: Volltext-Suche über alle Inhalte
- 📱 **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- 🌙 **Dark Mode**: Automatisches Theme basierend auf System-Einstellungen
- ⚡ **Schnell**: Statisch generiert mit Astro für maximale Performance

## 📚 Inhalt

### Grundlagen
- Was ist eine Datenbank?
- 3-Ebenen-Architektur (ANSI-SPARC)

### Design & Modellierung
- Phasen der Datenbankentwicklung
- Entity-Relationship-Modell (ERM)
- Tabellenmodell (Logisches Design)
- Normalisierung (1NF, 2NF, 3NF)

### SQL - Die Datenbanksprache
- Einführung in SQL
- DDL (Data Definition Language) – Struktur definieren
- DML (Data Manipulation Language) – Daten verwalten
- DQL (Data Query Language) – Daten abfragen

### Praxis
- Übungsaufgaben mit Lösungen


### Domänenübersicht
Kurzer Überblick über die verwendeten Beispielwelten zur Förderung von Transferdenken:

| Domäne    | Entitätstypen (Kern) | Zentrale Beziehungen | Didaktischer Fokus |
|-----------|----------------------|----------------------|--------------------|
| Pokémon   | Trainer, Pokemon, Attacke | Trainer 1:n Pokemon; Pokemon n:m Attacke | Einstieg mit vertrautem Spiel, Motivation |
| Instagram | User, Post, Kommentar, Like, Follower | User 1:n Post; User n:m User (Follower) | Soziale Plattform, reale Datenmengen |
| Kino      | Film, Saal, Vorstellung, Ticket | Film 1:n Vorstellung; Vorstellung 1:n Ticket | Zeitbezug, Kapazitäten, Auslastung |
| Schule    | Schüler, Lehrer, Kurs, Einschreibung, Unterricht | Schüler n:m Kurs; Lehrer 1:n Unterricht | Klassisches Verwaltungsszenario |

Die Domänen erscheinen kontextabhängig in Kapiteln (ERM, Relationaler Entwurf, Normalisierung, SQL) und in den Übungsaufgaben. Ziel: Erkennen gemeinsamer Muster (n:m über Verknüpfungstabelle, Redundanzen, Schlüsselbildung).

### Zusatzmaterial
- Beispiel-Datensätze (JSON) für Übungen:
  - `public/data/pokemon_sample.json`
  - `public/data/kino_sample.json`
  - `public/data/schule_sample.json`

Nutzen: Schnell eigene SQL-Übungen auf einem lokalen DB-System (z.B. SQLite / MariaDB) ableiten.

## 🚀 Schnellstart

### Voraussetzungen
- [Node.js](https://nodejs.org/) v18 oder höher
- npm oder yarn

### Installation & Start

```bash
# Repository klonen
git clone <repository-url>
cd datenbankopedia

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist nun unter `http://localhost:4321/` erreichbar.

### Verfügbare Kommandos

| Kommando            | Aktion                                         |
| :------------------ | :--------------------------------------------- |
| `npm install`       | Dependencies installieren                       |
| `npm run dev`       | Dev-Server auf `localhost:4321` starten        |
| `npm run build`     | Production Build nach `./dist/` erstellen      |
| `npm run preview`   | Build lokal vor Deployment testen              |
| `npm run astro`     | Astro CLI ausführen (z.B. `npm run astro add`) |

## 📁 Projektstruktur

```
datenbankopedia/
├── public/              # Statische Assets (Favicon, etc.)
│   └── favicon.svg
├── src/
│   ├── assets/          # Bilder, SVGs (werden von Astro optimiert)
│   │   └── logo.svg
│   ├── content/
│   │   ├── config.ts    # Content Collections Schema
│   │   └── docs/        # MDX-Seiten (alle Kapitel)
│   │       ├── index.mdx
│   │       ├── grundlagen.mdx
│   │       ├── architektur.mdx
│   │       ├── phasen.mdx
│   │       ├── erm.mdx
│   │       ├── logisch.mdx
│   │       ├── normalisierung.mdx
│   │       ├── sql-intro.mdx
│   │       ├── sql-ddl.mdx
│   │       ├── sql-dml.mdx
│   │       ├── sql-dql.mdx
│   │       └── aufgaben.mdx
│   ├── styles/
│   │   └── custom.css   # Custom Styling (Tabellen, SQL-Highlighting)
│   └── env.d.ts         # TypeScript Definitionen
├── .gitignore
├── astro.config.mjs     # Astro & Starlight Konfiguration
├── package.json
├── tsconfig.json        # TypeScript Konfiguration
└── README.md
```

## 🎨 Theme Anpassung

Das Projekt nutzt das **@catppuccin/starlight** Plugin mit folgenden Einstellungen:

```js
// astro.config.mjs
plugins: [
  catppuccin({
    flavor: 'mocha',    // latte | frappe | macchiato | mocha
    accent: 'sky',      // rosewater | flamingo | pink | mauve | red | maroon
                        // peach | yellow | green | teal | sky | sapphire | blue | lavender
  }),
]
```

### Verfügbare Catppuccin Flavors
- **Latte**: Hell, für helle Umgebungen
- **Frappé**: Gedämpft, gemütlicher Light Mode
- **Macchiato**: Gedämpft, gemütlicher Dark Mode
- **Mocha**: Dunkel, für dunkle Umgebungen (Standard)

## 🛠️ Inhalte bearbeiten

Alle Inhalte befinden sich als MDX-Dateien in `src/content/docs/`.

### Neues Kapitel hinzufügen

1. Neue MDX-Datei in `src/content/docs/` erstellen:

```mdx
---
title: Mein neues Kapitel
description: Beschreibung für SEO und Übersicht
---

## Überschrift

Dein Content hier...
```

2. In `astro.config.mjs` zur Sidebar hinzufügen:

```js
sidebar: [
  {
    label: 'Kategorie',
    items: [
      { label: 'Mein neues Kapitel', link: '/mein-kapitel/' },
    ],
  },
]
```

### Starlight Komponenten nutzen

MDX unterstützt spezielle Starlight-Komponenten:

```mdx
:::tip[Hinweis]
Ein hilfreicher Tipp für Schüler
:::

:::caution[Achtung]
Wichtiger Hinweis
:::

:::danger[Fehler vermeiden]
Häufiger Fehler
:::
```

## 📦 Deployment

### GitHub Pages (empfohlen)

Dieses Repository ist für GitHub Pages vorbereitet (Workflow unter `.github/workflows/gh-pages.yml`).

1. Repository auf GitHub erstellen (z.B. `datenbankopedia`).
2. Remote hinzufügen:
   ```bash
   git remote add origin git@github.com:<github-username>/datenbankopedia.git
   git push -u origin main
   ```
3. In den Repository Settings unter Pages den Branch `gh-pages` (wird automatisch erstellt) prüfen.
4. Die Seite ist erreichbar unter: `https://<github-username>.github.io/datenbankopedia/`

Astro `site` Konfiguration wurde als Platzhalter gesetzt. Nach dem ersten Deploy anpassen:
```js
// astro.config.mjs
site: 'https://<github-username>.github.io/datenbankopedia/'
```

### Manuelles Hosting

```bash
npm run build
# Inhalt aus dist/ auf beliebigen Static Host laden
```

### Netlify
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

## 🤝 Beitragen

Fehler gefunden oder Verbesserungsvorschlag?

1. Fork erstellen
2. Feature Branch: `git checkout -b feature/neue-funktion`
3. Änderungen committen: `git commit -m 'Neue Funktion hinzugefügt'`
4. Push zum Branch: `git push origin feature/neue-funktion`
5. Pull Request öffnen

## 📝 Lizenz

Bildungsmaterial für Unterrichtszwecke.

## 🔗 Links

- [Astro Dokumentation](https://docs.astro.build)
- [Starlight Dokumentation](https://starlight.astro.build)
- [Catppuccin Theme](https://github.com/catppuccin/catppuccin)

---

**Entwickelt mit ❤️ für den Informatik-Unterricht**


