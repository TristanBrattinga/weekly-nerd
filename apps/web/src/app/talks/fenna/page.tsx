import BlogPost from 'ui/components/BlogPost'

const Page = () => {
    return (
        <>
            <BlogPost
                title="Bakken & Bæck"
                lecturer="Fenna de Wilde"
                content={`<p>Heeft bij Build in Amsterdam gewerkt en werkt nu bij bakken & bæck.</p>`}
                reflection="Ik vond Fenna haar gastcollege leerzaam. Ik ben zelf niet heel erg bezig met toegankelijkheid ondanks dat er erg op wordt gehamerd. Ik werk zelf ook als frontender en bij het bedrijf waar ik werk wordt er ook geen aandacht besteed aan toegankelijkheid. Fenna heeft zich hiervoor ingezet en duidelijk gemaakt binnen haar bedrijf hoe het ook kan. Dat vind ik echt heel tof van haar! Ook heeft zij een voorbeeld laten zien van hoe je een toegankelijke carousel kan maken. Dit is altijd een probleem en zij laat het heel goed zien."
            />
        </>
    )
}

export default Page
