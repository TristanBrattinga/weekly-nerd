import BlogPost from 'ui/components/BlogPost'

const Page = () => {
    return (
        <>
            <BlogPost
                title="Polypane"
                lecturer="Kilian Valkhof"
                content={`<p>Kilian maakt browsers. Hij heeft PolyPane ontwikkeld. Ook heeft hij bijgedragen aan Electron.js. PolyPane is ook gemaakt met behulp van Electron.js.</p>
<p>De regels van Kilian</p>
<ul>
<li>The rule of least power is een basisprincipe waar op webtechnologie gebouwd zijn. “Choose the least powerful language suitable for a given purpose”. Begin bij de basis. Oftewel begin bij HTML, dan CSS wanneer nodig en dan wanneer echt nodig JS. 
</li>
<li>Mensen die browsers maken zijn meer gaan luisteren naar wat developers willen.
</li>
<li>De browser kan veel wat jij kan met javascript. Maar toegankelijker en sneller.
</li>
</ul>
<p>De main take-away is kijk wat je eerst kan doen zonder JavaScript!</p>
`}
                reflection="Ik vond het gastcollege van Kilian extreem leerzaam. Hij heeft mij dingen geleerd over de kracht van HTML en CSS alleen. Ik grijp toch snel naar JavaScript wanneer iets complexs wil oplossen. Tegenwoordig gaan HTML en CSS veel verder dan voorheen. Ik heb veel dingen uit Kilian's gastcollege al toegepast in de vakken die we hebben gekregen in de minor Web Dev & Design"
            />
        </>
    )
}

export default Page
