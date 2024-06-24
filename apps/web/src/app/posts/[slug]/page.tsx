import { allPosts } from '@contentlayer/generated'
import PostHeader from 'ui/components/PostHeader'
import PostContent from 'ui/components/PostContent'
import Sidebar from 'ui/components/Sidebar'

export const generateStaticParams = async () => allPosts.map(post => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

    return (
        <section className="container flex justify-center gap-10 my-12 lg:my-24">
            <Sidebar post={post} />
            <section className="max-w-2xl">
                <PostHeader post={post} />
                <PostContent post={post} />
            </section>
        </section>
    )
}

export default PostLayout
