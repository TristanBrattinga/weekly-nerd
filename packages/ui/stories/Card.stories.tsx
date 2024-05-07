import Card from '../components/Card'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
}
export default meta

export const primary = () => {
    return (
        <div className="max-w-2xl">
            <Card
                title={'Polypane'}
                lecturer="Kilian Valkhof"
                description={'Lorem ipsum'}
                image={{
                    src: '/images/stock.jpg',
                    alt: '',
                }}
            />
        </div>
    )
}
