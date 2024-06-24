import { compareAsc } from 'date-fns'
import { allPosts } from '@contentlayer/generated'
import PostList from 'ui/components/PostList'

const Page = () => {
    const posts = allPosts.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))

    return <PostList posts={posts} />
}

export default Page
