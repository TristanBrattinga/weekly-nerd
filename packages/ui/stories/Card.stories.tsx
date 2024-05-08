import Card from '../components/Card'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
}
export default meta

export const primary = () => {
    return (
        <Card
            title={'Polypane'}
            lecturer="Kilian Valkhof"
            description="Kilian's hoofd onderwerp was hoe we steeds minder JavaScript nodig hebben en hoe er steeds
                meer mogelijk is met alleen HTML en CSS. Kilian vertelt over zijn eigen browser Polypane en Electron.js"
            image={{
                src: '/images/stock.jpg',
                alt: '',
            }}
            link={{ link: '/talks/polypane', label: 'Polypane' }}
        />
    )
}
