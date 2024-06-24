import { format, parseISO } from 'date-fns'
import { PostHeaderProps } from './types'

const PostHeader = ({ post }: PostHeaderProps) => {
    return (
        <>
            <section className="flex justify-between items-end pb-4 mb-2">
                <div>
                    <h2 className="text-4xl font-bold mb-2 text-accent w-fit">{post.title}</h2>
                    <p>Spreker: {post.lecturer}</p>
                </div>
                <time dateTime={post.date} className="mb-1 text-sm flex shrink-0">
                    {format(parseISO(post.formattedDate), 'dd-MM-yyyy')}
                </time>
            </section>
        </>
    )
}

export default PostHeader
