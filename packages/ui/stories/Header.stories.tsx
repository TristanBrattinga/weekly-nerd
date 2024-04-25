import Header from '../components/Header'

import Link from 'next/link'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
}
export default meta

export const primary = () => {
    return (
        <Header
            links={[
                { link: '/talks', label: 'Talks' },
                { link: '/talks', label: 'Talks' },
                { link: '/talks', label: 'Talks' },
            ]}
        />
    )
}
