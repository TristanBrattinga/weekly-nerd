---
title: 9elements
lecturer: Nils Binder
date: 6-3-2024
image: /images/9elements.png
---

### Samenvatting

Nils verteld over het werk dat hij doet voor 9elements. Dit is een digital agency in Duitsland en hij is hier het hoofd
van de webdevelopment afdeling. Ook vertelt hij over het gebruik van containers en whitespace in een website.

### Notities

Bij 9elements zijn er 3 eenheden:

1. Communication design - print work, non coding designers
2. Product development - banking, data visualisation, Schalke 04
3. Web development - small to medium sized websites

Al deze eenheden werken nauw samen en er is veel overlap tussen de afdelingen. Nils is het hoofd van de webontwikkeling
afdeling. Het team van Nils bestaat uit 6 developers en verder zijn er 7 communication designers en 30
productontwikkelaars. Ze hebben ook een afdeling voor cyberbeveiliging, maar deze is niet zo groot.

9elements is opgericht door 3 mensen die graag samen een bedrijf wilden starten 20 jaar geleden. Zij wilden het bedrijf
eigenlijk 3elements noemen, maar deze naam was al in gebruik.

---

De wrapper (container)

Een wrapper stelt een maximale breedte in voor de content, voegt wat opvulling toe en centreert de inhoud.
Hieronder valt te lezen hoe je dit bouwt.

#### Old way

```css
.wrapper {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1.5rem;
}
```

#### New way

```css
.wrapper {
    width: min(100% - 3rem, 75rem);
    margin-inline: auto;
    /*because always putting the 0 is unnecessary*/
}
```

#### More complex, but clever

```css
.wrapper {
    margin-inline: max(1.5rem, ((100% - 75rem) / 2));
}
```

Vroeger werden websites ontworpen met Photoshop, nu gebeurd dat met Figma. 8 jaar geleden werd Figma uitgebracht. Bij
9elements wordt er ook met Figma gewerkt. In dit geval is Figma veel beter om websites mee te ontwerpen, omdat dit het
meest lijkt op CSS. Dit is vanwege de eenheden die je aan elementen meegeeft. Eenheden in Figma zijn meestal pixels,
maar er zijn ook percentages en rem. Eenheden in CSS zijn px, %, rem, ch, ex, em. Voor viewport-eenheden zijn er veel
verschillende eenheden.

Nils is niet zo enthousiast over container queries. Omdat ontwikkelaars meer invloed krijgen op wat er gebeurt in plaats
van de browser.

De optionele kolom layout houdt in dat je de witruimte in kolommen verdeelt. De hoofdinhoud neemt een bepaalde ruimte
in en de witruimte kan worden verdeeld in kolommen.

Wat voorbeelden waar Nils aan heeft gewerkt en waar zo een kolom layout wordt gebruikt:

- [dasruhrgebiet.de](https://dasruhrgebiet.de/)
- [bryck.com](https://bryck.com/)

### Reflectie

Ik vond het hoorcollege van Nils Binder heel leuk, omdat ik het interessant vind om te horen hoe het er bij andere
agencies aan toegaat. Verder vond ik het onderdeel over de wrapper op zich wel interessant, alleen ik denk niet snel dat
ik het zal gebruiken. In mijn opinie is het gebruik van de standaard container toch een stuk makkelijker. Een
alternatieve kolom layout leent zich niet altijd voor iedere website en de standaard container wel. Ik zal het misschien
wel een keer uitproberen wanneer ik een eigen zijproject zou beginnen, om een beetje mee te spelen. 