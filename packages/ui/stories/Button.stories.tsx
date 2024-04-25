import Button from '../components/Button'

import Link from 'next/link'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
}
export default meta

export const primary = () => {
    return (
        <div className="m-10">
            <Button as={Link} href="/" variant="primary">
                Free Discovery Session
            </Button>
        </div>
    )
}
