import CardList from 'ui/components/CardList'

const Page = () => {
    return (
        <>
            <CardList
                cards={[
                    {
                        title: 'Polypane',
                        lecturer: 'Kilian Valkhof',
                        description:
                            "Kilian's hoofd onderwerp was hoe we steeds minder JavaScript nodig hebben en hoe er steeds meer mogelijk is met alleen HTML en CSS. Kilian vertelt over zijn eigen browser Polypane en Electron.js",
                        image: { src: '/images/electron.png', alt: '' },
                        link: { link: '/talks/kilian', label: 'Kilian Valkhof' },
                    },
                    {
                        title: 'Bakken & Bæck',
                        lecturer: 'Fenna de Wilde',
                        description:
                            "Fenna's hoofd onderwerp was volledig over toegankelijkheid en hoe zij dit vertegenwoordigt op het internet.",
                        image: { src: '/images/bakkenbaeck.jpg', alt: '' },
                        link: { link: '/talks/fenna', label: 'Fenne de Wilde' },
                        reverse: true,
                    },
                    {
                        title: 'Art on the Web',
                        lecturer: 'Jeffrey Arts',
                        description: 'Jeffrey vertelt over de kunstwerken die hij maakt met code.',
                        image: { src: '/images/jeffrey.jpeg', alt: '' },
                        link: { link: '/talks/jeffrey', label: 'Jeffrey Arts' },
                    },
                    {
                        title: '9elements',
                        lecturer: 'Nils Binder',
                        description:
                            'Nils talked about his work at 9elements. He explained about how the work field is and what 9elements does as an agency.',
                        image: { src: '/images/9elements.png', alt: '' },
                        link: { link: '/talks/nils', label: 'Nils Binder' },
                    },
                    {
                        title: 'Adactio',
                        lecturer: 'Jeremy Keith',
                        description:
                            'Jeremy Keith is een bekende blogger en web-developer. Hij vertelt over de verschillende stijlen van programmeren.',
                        image: { src: '/images/jeremy.jpeg', alt: '' },
                        link: { link: '/talks/nils', label: 'Jeremy Keith' },
                    },
                ]}
            />
        </>
    )
}

export default Page
