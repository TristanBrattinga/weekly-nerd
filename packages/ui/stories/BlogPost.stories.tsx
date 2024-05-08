import BlogPost from '../components/BlogPost'

import Link from 'next/link'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof BlogPost> = {
    title: 'Components/BlogPost',
    component: BlogPost,
}
export default meta

export const primary = () => {
    return <BlogPost />
}
