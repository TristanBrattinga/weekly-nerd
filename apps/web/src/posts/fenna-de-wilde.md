---
title: Toegankelijkheid
lecturer: Fenna de Wilde
date: 14-2-2024
image: /images/fenna.jpeg
---

### Samenvatting

Fenna vertelt over toegankelijkheid en hoe zij dit vertegenwoordigt op het internet en binnen haar bedrijf. Zij werkt nu
bij de agency Bakken & Bæck.

### Notities

Fenna heeft na haar studie bij Build in Amsterdam gewerkt en werkt nu bij een agency genaamd Bakken & Bæck. Websites
waar zij aan heeft gewerkt zijn:

- [Phantom](https://phantom.app/)
- [Mammut](https://www.mammut.com/us/en)

Fenna vertelt vooral over toegankelijkheid en hoe dit vaak wordt overgeslagen of genegeerd op het web. Zij legt uit hoe
belangrijk het is dat het web voor iedereen beschikbaar en ook gebruiksvriendelijk moet zijn. Dit moet dan ook de
standaard worden.

De tech stack die Fenna bij haar werk gebruikt bestaat uit de volgende technologieën:

1. Next.js + TypeScript, als framework en taal
2. Sanity, als CMS
3. Vercel, voor de deployment

#### ARIA-labels

Je kan het attribuut `aria-label` gebruiken om een label te geven aan een element wat geen duidelijke leesbare functie
heeft. Met leesbaar wordt bedoeld voor leesbaar voor een screenreader. Bijvoorbeeld als er een button is met daarin een
SVG en er geen aria-label wordt meegeven, wordt dit gewoon als 'button' voorgelezen.

Met het `aria-controls` attribuut kan je twee elementen aan elkaar linken die samen interacteren. Met het
attribuut `aria-expanded` geef je de status weer van de state van het corresponderende element. Bijvoorbeeld wanneer een
button een fold-out menu controleert, regelt dit attribuut de aria checked state.

Het `aria-live` attribuut maakt dynamische wijzigingen mogelijk zonder de hele pagina te herladen. Je kan dit attribuut
drie waardes meegeven:

1. “Off”
2. “Polite”
3. “Assertive”

Het aria live gaat vaak samen met `aria-atomic` attribuut, want dit geeft meer context. De screenreader geeft dan de
hele waarde weer in plaats van alleen het resultaat.

#### Tips

1. Vermijd het gebruik van li elements voor slides binnen een carousel. Als je slides verbergt, zal het aangekondigde
   aantal li-elements niet overeenkomen met het exacte aantal slides.
2. Wanneer een dialog niet vanilla werkt vanwege animaties kan je werken met deze packages:
    - react-focus-look
    - react-aria-components

#### Typografie

Ook bij het gebruik van typografie moet er nagedacht worden over de toegankelijkheid. Een aantal belangrijke vuistregels
hierbij zijn:

1. Contrast. Dit moet op zijn minst 4,5:1 zijn. Het WAI WAI heeft de color contrast formule gemaakt.
2. Lettergrootte. Dit moet op zijn minst 16px of 1rem zijn.
3. Regellengte. Voor optimale leesbaarheid mag dit maximaal 50 tot 75 tekens zijn. Hiervoor kan je de CSS-unit `ch`
   gebruiken.

### Reflectie

Ik vond Fenna haar gastcollege leerzaam. Ik ben zelf nog niet heel erg bezig met toegankelijkheid ondanks dat er erg op
wordt gehamerd. Ik werk zelf ook als frontender en bij het bedrijf waar ik werk wordt er ook geen aandacht besteed aan
toegankelijkheid. Dit stimuleert mij niet echt om hier zelf tijd aan te besteden tenzij het expliciet wordt verwacht
vanuit school. Ik wil hier wel aan gaan werken. Fenna heeft zich hiervoor ingezet en duidelijk gemaakt binnen haar
bedrijf hoe het ook anders kan. Dat vind ik echt heel tof van haar! Ook heeft zij een voorbeeld laten zien van hoe je
een toegankelijke carousel kan maken. Dit is altijd een probleem en zij laat het heel goed zien.