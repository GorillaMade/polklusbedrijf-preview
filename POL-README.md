# Pol Klusbedrijf — Astro website

Gebouwd op de meegeleverde GorillaMade Astro Starter Kit. Bestaande componenten en Sass-designsysteem blijven behouden. Projectspecifieke styling staat in `sass/pol.scss`.

## Pagina's
- `/` — conversiegerichte homepage, diensten, projecten, werkwijze, CTA's
- `/offerte` — Alpine.js wizard in 5 stappen, inclusief optionele bestanden
- `/bedankt` — bevestigingspagina
- `/privacy` — **concept**: moet vóór publicatie juridisch worden aangevuld

## Starten
`npm install` en `npm run dev` (Node.js >=22.12). Test met `npm run build`.

## Offerteverwerking — BELANGRIJK
Het formulier gebruikt **Netlify Forms** (`data-netlify="true"`, `method="POST"`, `enctype="multipart/form-data"`) met honeypot. Het is bedoeld voor een **Netlify-deployment**. Op andere hosts wordt geen e-mail verstuurd of aanvraag opgeslagen zonder eigen backend/formulierdienst. Publiceer pas nadat u een testaanvraag inclusief bestanden succesvol heeft ontvangen en Netlify-formuliermeldingen heeft ingesteld. De bedankpagina alleen is geen bewijs van daadwerkelijke aflevering.

De wizard gebruikt Alpine.js voor stapnavigatie en browser-validatie; er is geen aparte JavaScript-bundle. De ingevulde gegevens worden niet lokaal opgeslagen, dus na refresh begint het formulier opnieuw.

## Nog controleren voor livegang
1. Vervang externe Unsplash-sfeerbeelden door **eigen, geautoriseerde projectfoto's**. De voorbeeldfoto's tonen niet noodzakelijk werk van Pol Klusbedrijf.
2. Laat Pol alle teksten, diensten en claims accorderen; de bedrijfsinformatie is afgeleid van de bestaande website.
3. Vul definitieve contactgegevens, privacyverklaring, bewaartermijnen en verwerking van uploads in.
4. Configureer en test Netlify Forms, spamfiltering, notificaties en uploadlimieten.
5. Controleer SEO-domein, sociale afbeelding, juridische teksten en toegankelijkheid in de browser.
6. Gebruik `npm run build` met een recente Node-versie en corrigeer eventuele projectafhankelijke typefouten.

De website is een uitgewerkte, aanpasbare oplevering, geen live gekoppelde productiesite.


## Projectpagina’s
- Overzicht: `/projects`
- Dynamische statische detailroutes: `/projects/[...id].astro` (Astro `getStaticPaths`)
- Contentbeheer: `src/data/projects.ts`
- De drie items zijn **voorbeeldpresentaties met externe sfeerbeelden**. Vervang tekst, beelden en claims door geverifieerde echte projecten voordat je ze als portfolio presenteert.
- Optioneel: vul per project `before` en `after` in met twee foto's van dezelfde situatie. De Alpine before/after-schuif verschijnt dan automatisch op de detailpagina.
- Alle `✳`-tekens zijn uit de code verwijderd.


## Contentcollectie: projecten

Alle projecten staan nu in `content/projecten/*.md`. Astro's Content Layer (`src/content.config.ts`) leest deze Markdownbestanden met een Zod-schema. De URL wordt bepaald door de bestandsnaam, bijvoorbeeld `content/projecten/traprenovatie.md` → `/projects/traprenovatie`.

Frontmatter: `title`, `category`, `summary`, `cover`, `gallery`, `highlights`, `featured`, `order`, `concept`, optioneel `before` en `after`. De Markdown-body is de projectbeschrijving. `featured: true` toont het project op de homepage. `concept: true` markeert voorbeeldbeelden. Voeg `before` en `after` uitsluitend toe met echte foto's van dezelfde situatie.

De website gebruikt nu de bestaande starterkit-componenten, waaronder Section, ContentWrapper, Grid, Heading, Paragraph, Eyebrow, Button, Img, RichText, BaseHead, Header, SiteNav en Footer. `ProjectCard.astro` is een compositie van bestaande componenten. De offertewizard gebruikt nog deels eigen formuliermarkup vanwege de bestaande stapsgewijze validatie; dit kan later apart naar de form-components worden gemigreerd.
