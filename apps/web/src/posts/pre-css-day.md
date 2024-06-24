---
title: Pre CSS day
lecturer: Bramus van Damme & Miriam Suzanne
date: 05-06-2024
image: /images/css-day.png
---

### Samenvatting

Ik kon helaas niet bij deze Weekly Nerd zijn, vanwege ziekte. Ik vond het heel jammer toen ik de onderwerpen hoorde en
de slides zag. In de aanloop naar het CSS day evenement werd er een pre CSS day hoorcollege gegeven door Bramus en
Miriam. Bramus heeft het over Multi Page Application (MPA) view transitions en Miriam over CSS container queries.

### Notities

Omdat ik helaas niet bij dit hoorcollege aanwezig kon zijn heb ik zelf een klein onderzoekje gedaan naar MPA view
transitions en container queries.

#### View transitions

View transitions zijn mooie animaties tussen het navigeren van verschillende pagina's. Dit gebeurt met de View
Transition API. Dit gebruiken verbetert de gebruikerservaring extreem, omdat het vloeiende overgangen geeft in plaats
van schokkerige, inladende webpagina's of content. Dit kan ingezet worden voor een single page web app of een multi page
web app.

Omdat er twee scenario's zijn (single page & multi page) zijn er ook twee verschillende manieren om dit toe te passen.

Voor een SPA:

- Gebruik document.startViewTransition om de overgang te starten.
- Update de DOM en maak gebruik van CSS-animaties.

Voor een MPA:

- Gebruik de CSS-regel `@view-transition { navigation: auto; }` om overgangen te activeren tussen pagina's.

Het gebruiken van view transitions heeft zeker voordelen t.o.v. het niet gebruiken van view transitions:

- Verbeterde UX: Maakt de navigatie visueel aantrekkelijker.
- Minder Code: Vereenvoudigt het schrijven van CSS en JavaScript voor overgangen.
- Toegankelijkheid: Vermindert problemen zoals verlies van leespositie en focusverwarring.

#### Container queries

Container queries is een CSS functie waarmee je stijlen kunt toepassen op een element afhankelijk van de grootte van
de container waarin het zich bevindt, in plaats van op basis van de grootte van het viewport. Met media queries is
altijd alles relatief ten op zicht van de viewport en dit kan soms beperkend zijn. Container queries bieden een
flexibele en adaptieve styling mogelijkheid met zich mee. Dit is vooral handig wanneer je met complexe lay-outs werkt en
op basis van herbruikbare componenten. Hieronder een voorbeeld hoe je dit kan inzetten:

```css
@container (min-width: 500px) {
    .child {
        font-size: 1.5rem;
    }
}
```

Hiermee is de font-size van het child-element alleen 1.5rem als de container zelf minimaal een breedte heeft van
500px.

De voordelen van het gebruik van container queries zijn:

- Componentgebaseerd ontwerp: Maakt het mogelijk om responsieve componenten te creëren die zich aanpassen aan hun
  directe
  omgeving.
- Flexibiliteit: Stijlen worden dynamisch aangepast zonder afhankelijk te zijn van de viewport.
- Verminderde afhankelijkheid van media queries: Focus op container-specifieke eigenschappen.

### Reflectie

Ik vind dit allebei hele vette onderwerpen en zoals eerder gezegd, jammer dat ik hier niet bij kon zijn. Ik gebruik zelf
een NPM-package genaamd `SWUP` om coole page transitions mogelijk te maken. Nu ik weet dat dit mogelijk is in Chrome ga
ik hier 100% mee experimenteren en spelen. Ik wist zelf al door het vak CSS to the Rescue wat container queries waren en
toen vind ik dit al interessant. Ik weet alleen niet precies wanneer ik dit nodig zal hebben, maar dat zal ongetwijfeld
gebeuren.