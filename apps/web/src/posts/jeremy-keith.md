---
title: Declarative & imperative programming
lecturer: Jeremy Keith
date: 14-3-2024
image: /images/jeremy.jpeg
---

### Samenvatting

Jeremy vertelt over zijn gedachte met betrekking to declarative en imperative programming. Verder geeft hij wat handige
tips hoe hij de controle binnen zijn eigen perken houdt.

### Notities

#### Declarative

HTML is declaratief en domeinspecifiek.
CSS is een andere declaratieve taal. Wanneer je CSS schrijft, is het een suggestie.
Declaratieve talen zijn meer beperkt maar vergevingsgezinder.

#### Imperative

JavaScript is een imperatieve taal. Je bent niet gebonden aan een specifieke woordenschat.

Met een declaratieve taal is het comfortabeler om een fout te maken, maar met een imperatieve taal is het veel erger.
Het debuggen wordt steeds moeilijker.

Wanneer er een fout wordt gemaakt in JS, stopt de browser met parsen.

Imperatieve talen kunnen op andere plaatsen worden gebruikt, maar wanneer er een fout wordt gemaakt, is er een groter
probleem.

#### Vergelijking

Er is een verschil in denkwijze tussen imperatief en declaratief.

Jeremy heeft een ethos wanneer hij naar JS grijpt:

> JavaScript moet alleen doen wat JavaScript kan doen.

Als een andere taal het kan doen, gebruik dan die taal. Gebruik indien mogelijk HTML of CSS voor iets dat ze kunnen
afhandelen. Hij vermijdt JS waar mogelijk. De foutafhandeling van HTML en CSS is robuuster.

Sommige mensen schrijven een hoop JS alleen voor een knop, terwijl HTML een knop-element heeft. Dit gebeurt door
een `<div/>` element te koppelen met JavaScript en hier allerlei onnodige eventListeners aan vast te koppelen.

Het gevoel van controle hebben is belangrijk, en daarom gebruiken mensen JS. De browser neemt sommige van deze acties
uit handen. Bijvoorbeeld bij een `<button/>` element.

Wanneer je informatica leert, leer je tot in de kleinste details hoe je de computer moet vertellen wat te doen. En
wanneer de browser sommige van deze acties wegneemt, voelen ze zich niet in controle. Dit is het verschil tussen
declaratief en imperatief.

Het is ook mogelijk om een imperatieve gedachte naar CSS te brengen, ook al is het een declaratieve taal. 95% van de
tijd komt 1rem overeen met 16px. Als een gebruiker een andere lettergrootte-instelling op hun computer heeft, zullen
vaste pixels een fout veroorzaken. Het gebruik van rem is meer declaratief en semantisch. Bij het gebruik van een
ltr-taal kun je beter padding-inline-start gebruiken omdat je wilt dat het aan de linkerkant van de tekst begint.

Hij gebruikt clamp om een min en max te geven om zijn lettertype responsief te maken. Wanneer het lettertype responsief
is ten opzichte van de viewport, geef je meer controle op omdat je niet weet wat de exacte lettergrootte is.

> “We moeten geen berekeningen doen. Computers moeten berekeningen doen.”

Je moet de grenswaarden instellen en de computer de rest laten afhandelen. Zegt Jeremy hiermee dat declaratief beter is
dan imperatief? Het hangt ervan af!

Volgens hem: Antwoord altijd met het hangt ervan af wat?

In dit geval hangt het af van de cultuur van de omgeving. Bij declaratief is het resultaat erg belangrijk. Met
management als voorbeeld kan het zijn dat je bij imperatief wordt beoordeeld op werk, tijd, aantal regels code, enz.
Declaratief betekent in management dat het werk gedaan moet worden, de voorwaarden doen er niet toe. Als je een meer
declaratieve mindset hebt, zoek dan mensen om mee samen te werken met een imperatieve mindset en vice versa.

Een goede manier om een bedrijfscultuur te creëren is een ontwerp systeem. Dit laat je nadenken over hoe dingen
worden gemaakt.

Probleemoplossing: Manieren van doen (denken)
Denken kan analytisch zijn. Je breekt het af tot intrinsieke delen en bestudeert ze in detail. (Inzoomen)
Systeemdenken. Hier neem je een stap terug en bekijk je het geheel. (Uitzoomen)

Ontwerp systemen kunnen ook declaratief en imperatief zijn. Met een ontwerp systeem denk je analytisch. Je breekt
componenten, atomen, moleculen en andere delen af.

“De rand moet 10% lichter zijn dan de achtergrondkleur.” Dit is een middenweg tussen declaratief en imperatief ontwerp
systeem. Omdat er nog steeds vrijheid is voor de ontwerpers.

Het hangt ervan af? Het hangt af van wat, zegt Jeremy op een vreemde toon. Van de cultuur van het bedrijf.

Op sommige manieren is je medium ook belangrijk om te bedenken welke aanpak juist is. Kies wijs tussen imperatief en
declaratief wanneer je bijvoorbeeld print, native, enz. gebruikt.

In het begin was de breedte 640px, daarna 800px en toen 1024px. Alles wat ze wilden was controle. Deze wens om controle
te hebben gaat uiteindelijk de andere kant op.

Zijn we nu in een nieuw tijdperk van declaratief ontwerp? Het antwoord ligt bij jou. Jeremy weet het niet.

Een aantal leuke bronnen:

- [A Dao of Web Design by John Allsopp](https://alistapart.com/article/dao/)
- [Responsive Web Design by Ethan Marcotte](https://abookapart.com/products/responsive-web-design)
- [https://utopia.fyi/](https://utopia.fyi/)
- [https://buildexcellentwebsit.es/](https://buildexcellentwebsit.es/)
- [https://www.youtube.com/layoutland](https://www.youtube.com/layoutland)

#### Waar werkt Jeremy Keith?

Jeremy werkt bij Clearleft, hier hebben ze een declaratieve werkethiek en methode. Wanneer het bedrijf groter wordt,
wordt de werkethiek steeds meer imperatief.

### Reflectie

Ik vond Jeremy zijn hoorcollege zeker interessant, alleen het was voor mij toch net iets te abstract om precies te
begrijpen waar het nou over ging. Ik vond dat er in een korte tijd heel veel aanbod kwam en dat het allemaal best wel
door elkaar ging. Sommige stukken waren heel theoretisch en sommige stukken waarbij er echt op code werd ingegaan waren
weer heel praktisch. Als ik dit bijvoorbeeld vergelijk met het hoorcollege van Kilian, vond ik dat veel duidelijker
ondanks dat er ook diep op code werd ingegaan en tegelijkertijd veel werd verteld. Zijn talk duurde daarom ook twee uur
lang. Ik denk niet dat ik snel iets uit het hoorcollege van Jeremy nodig zal hebben of zal gebruiken, omdat de
praktische punten uit zijn presentatie best wel logisch en vanzelfsprekend zijn. 