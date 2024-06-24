import { PostContentProps } from './types'

const PostContent = ({ post }: PostContentProps) => {
    return (
        <>
            <article
                className="[&>*]:mb-4 [&>*:last-child]:mb-0 [&_h3]:text-2xl [&_h3]:border-t [&_h3]:border-white/50 [&_h3]:pt-4 [&_h4]:text-xl [&_h3]:text-accent [&_h3]:font-semibold [&_h4]:font-medium [&_pre]:bg-black/30 [&_pre]:p-4 [&_pre]:rounded [&_li]:list-disc [&_li]:list-inside [&_a]:underline [&_:not(pre)>code]:bg-black/30 [&_:not(pre)>code]:text-accent [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:rounded [&_blockquote]:border-l  [&_blockquote]:border-accent  [&_blockquote]:pl-2  [&_blockquote]:py-4  [&_blockquote]:font-medium [&_img]:my-4"
                dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
        </>
    )
}

export default PostContent
