import { compareAsc, compareDesc } from 'date-fns'
import { allPosts } from '@contentlayer/generated'
import PostList from 'ui/components/PostList'

const Page = () => {
    const posts = allPosts.sort((a, b) => compareAsc(new Date(a.formattedDate), new Date(b.formattedDate)))

    return <PostList posts={posts} />
}

export default Page
