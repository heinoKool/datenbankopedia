import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
    // Öffentlich erreichbare URL (GitHub Pages)
    site: 'https://heinokool.github.io/datenbankopedia/',
    // Base path für GitHub Pages Projekt-Repository
    base: '/datenbankopedia/',
    integrations: [
        starlight({
            title: 'DB Lernen',
            description: 'Datenbanken für die 11. Klasse',
            favicon: '/favicon.svg',
            logo: {
                src: './src/assets/logo.svg',
                replacesTitle: false,
            },
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Deutsch',
                    lang: 'de',
                },
            },
            sidebar: [
                {
                    label: 'Grundlagen',
                    items: [
                        { label: 'Was ist eine Datenbank?', link: '/grundlagen/' },
                        { label: '3-Ebenen-Architektur', link: '/architektur/' },
                    ],
                },
                {
                    label: 'Design & Modellierung',
                    items: [
                        { label: 'Phasen der Entwicklung', link: '/phasen/' },
                        { label: 'Das ER-Modell (ERM)', link: '/erm/' },
                        { label: 'Relationaler Entwurf', link: '/logisch/' },
                        { label: 'Normalisierung', link: '/normalisierung/' },
                        { label: 'Schlüssel & Integrität', link: '/schluessel/' },
                        { label: 'Beispiele: Kino & Schule', link: '/beispiele/' },
                    ],
                },
                {
                    label: 'SQL - Die Sprache',
                    items: [
                        { label: 'Was ist SQL?', link: '/sql-intro/' },
                        { label: 'SQL: DDL (Struktur)', link: '/sql-ddl/' },
                        { label: 'SQL: DML (Daten)', link: '/sql-dml/' },
                        { label: 'SQL: DQL (Abfragen)', link: '/sql-dql/' },
                        { label: 'Transaktionen & ACID', link: '/transaktionen/' },
                    ],
                },
                {
                    label: 'Physischer Entwurf',
                    items: [
                        { label: 'Physischer Entwurf & Performance', link: '/physisch/' },
                    ],
                },
                {
                    label: 'Aufgaben',
                    items: [
                        { label: 'Übungsaufgaben', link: '/aufgaben/' },
                    ],
                },
            ],
            customCss: [
                './src/styles/custom.css',
            ],
            plugins: [
                catppuccin({
                    flavor: 'mocha', // latte, frappe, macchiato, mocha
                    accent: 'sky',
                }),
            ],
        }),
    ],
    server: { port: 4321 },
});
