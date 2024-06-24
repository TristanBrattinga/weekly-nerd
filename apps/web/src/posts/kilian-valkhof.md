---
title: Polypane
lecturer: Kilian Valkhof
date: 7-2-2024
image: /images/electron.png
---

### Samenvatting

Kilian's hoofd onderwerp was hoe we steeds minder JavaScript nodig hebben en hoe er steeds meer mogelijk is met alleen
HTML en CSS. Verder vertelt hij over zijn eigen browser Polypane en Electron.js.

### Notities

Kilian heeft zijn eigen browser genaamd Polypane ontwikkeld. Ook heeft hij bijgedragen aan Electron.js. PolyPane is
geschreven in Electron.js. Polypane is een browser voor en door developers.

The rule of least power is een basisprincipe waar op webtechnologie gebouwd moet zijn:

> “Choose the least powerful language suitable for a given purpose”

Wat deze regel betekent, is eigenlijk het begin bij de basis. Oftewel begin bij HTML, overstappen naar CSS wanneer nodig
en dan wanneer echt niet zonder kan JavaScript gebruiken.

Mensen die browsers maken zijn meer gaan luisteren naar wat developers willen. Veel developers vergeten dat wat jij kan
met javascript, de browser waarschijnlijk standaard al kan. Alleen dan toegankelijker en sneller.

De main take-away hiervan is:

> Kijk eerst wat je kan doen zonder JavaScript.

Een goed voorbeeld hiervan is het maken van een custom toggle. Hier kan je gewoon een checkbox voor gebruiken i.p.v. een
button en daaraan een listener toevoegen met JavaScript.

#### Tips om JavaScript gebruik te verminderen

- Met `appearance: none` kan je de basic styling override.
- Gebruik `:focus-visible` in plaats van `:focus`
- Gebruik de `:checked` pseudo class om te stylen.
- Wanneer je geen outline wilt hebben voor muisgebruikers zet dan `outline: transparent` in plaats van `outline: none`.
  Mensen die een hoog contrast instelling hebben kunnen dan alsnog de outline zien.
- Input elementen kunnen van origine geen pseudo elementen hebben, wanneer je `appearance: none` gebruikt kan dit wel.
- `<input type=“checkbox” switch />` is een safari eigen switch styling. Pseudo classes die hieraan zijn toegevoegd
  zijn `::thumb` en `::track`.
- Gebruik een `<datalist/>` als options voor een `<select/>`
- Voor een accordion `<details/>` met een `<summary/>` gebruiken. Hierbij kan je `::marker` pseudo element gebruiken
  voor het stylen van het pijltje van een `<details/>` element. Het is ook belangrijk om de `<summary/>` iets van
  styling mee te geven voor toegankelijkheid.
- `Scroll-margin` en `scroll-padding` werkt hetzelfde als margin en padding, maar dan alleen voor scrolling. Bijv voor
  een fixed header met scrollen.
- Met de `:has` selector kan je stijlen aan de hand van andere onderdelen van je pagina. Is vergelijkbaar met de if else
  statement van JavaScript.
- De `:target` pseudo class kan je gebruiken om de active state aan te geven van het target.
- Als je wil dat een form element meebeweegt met de input value, `field-sizing: content` gebruiken.

#### Smooth Scrolling

Vroeger werd er jQuery gebruikt voor het smooth-scrolling effect. Tegenwoording is het zo simpel als
het toevoegen van de css property `scroll-behaviour: smooth;` aan je HTML.

Om toegankelijkheid in gedachten te houden is het een goed gebruik om standaard een media query geven met
prefers-reduced-motion: no-preference. Zo wordt er alleen smooth scrolling gebruikt wanneer de gebruiker niet expliciet
deze instelling aan heeft staan.

```css
@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behaviour: smooth
    }
}
```

#### Dialog

Het tonen van een modal of dialog is een veelvoorkomend ding op het web. Er is heel lang geen standaard HTML element
voor geweest, dus werden er grote onnodige packages en heel veel JavaScript voor gebruikt. Tegenwoordig is het heel
makkelijk om dit te doen en bij door alle browsers ondersteund. Het `<dialog/>` element heeft een klein beetje
JavaScript nodig om de modal te kunnen tonen. Dit is omdat er geluisterd moet worden naar een ander element om de modal
te tonen.

De form methods zijn uitgebreid met method=“dialog”, waardoor je nu aan de hand van een button klik in een form een
modal kan tonen. Het dialog element wordt toegevoegd aan de top-layer, dit zit als het ware tussen de browser en je
scherm.

Ook is het mogelijk om de backdrop, ook wel de overlay genoemd, te stylen met de `::backdrop` pseudo class.

Hieronder een voorbeeld hoe je dit kan inzetten:

```html

<dialog class="dialog">
    <form method="dialog"></form>
</dialog>
```

```javascript
const handleModal = () => {
    const dialog = document.querySelector('.dialog');
    if (dialog) {
        dialog.showModal()
    }
}
```

#### Coole dingen die eraan komen

- Scroll-driven animations: [https://scroll-driven-animations.style/](https://scroll-driven-animations.style/)
- Grid masonry. Hiermee kan je auto grid layouts maken in verschillende vormen en maten.
- Container queries zijn CSS-regels die het mogelijk maken om stijlen toe te passen op een element gebaseerd op de
  grootte van de container in plaats van de viewport.
- Selectlist, dit heeft alle semantiek van een `<select/>` maar is opgebouwd uit losse html elementen. Dit valt dus
  makkelijker te stylen en aan te passen.

### Reflectie

Ik vond het gastcollege van Kilian extreem leerzaam. Hij heeft mij dingen geleerd over de kracht van HTML en CSS alleen.
Ik grijp toch snel naar JavaScript wanneer ik iets complexers wil oplossen. Tegenwoordig gaan HTML en CSS veel verder
dan voorheen. Ik heb veel dingen uit Kilian's gastcollege al toegepast in de vakken die we hebben gekregen in de minor
Web Dev & Design. Ik ben ervan overtuigd dat ik veel van de vertelde onderwerpen ga toepassen binnen mijn eigen
projecten en verdere mogelijkheden!