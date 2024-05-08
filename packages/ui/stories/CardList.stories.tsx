import CardList from '../components/CardList'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof CardList> = {
    title: 'Components/CardList',
    component: CardList,
}
export default meta

export const primary = () => {
    return (
        <CardList
            cards={[
                {
                    title: 'Polypane',
                    lecturer: 'Kilian Valkhof',
                    description:
                        "Kilian's hoofd onderwerp was hoe we steeds minder JavaScript nodig hebben en hoe er steeds meer mogelijk is met alleen HTML en CSS. Kilian vertelt over zijn eigen browser Polypane en Electron.js",
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '/talks/polypane', label: 'Polypane' },
                },
                {
                    title: 'Bakken & Bæck',
                    lecturer: 'Fenna de Wilde',
                    description:
                        "Kilian's hoofd onderwerp was hoe we steeds minder JavaScript nodig hebben en hoe er steeds meer mogelijk is met alleen HTML en CSS. Kilian vertelt over zijn eigen browser Polypane en Electron.js",
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '/talks/polypane', label: 'Polypane' },
                    reverse: true,
                },
                {
                    title: 'Polypane',
                    lecturer: 'Kilian Valkhof',
                    description:
                        "Kilian's hoofd onderwerp was hoe we steeds minder JavaScript nodig hebben en hoe er steeds meer mogelijk is met alleen HTML en CSS. Kilian vertelt over zijn eigen browser Polypane en Electron.js",
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '/talks/polypane', label: 'Polypane' },
                },
            ]}
        />
    )
}
