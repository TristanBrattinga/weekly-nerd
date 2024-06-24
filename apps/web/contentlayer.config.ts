// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { parse, format } from 'date-fns'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        lecturer: { type: 'string', required: false },
        date: { type: 'string', required: true },
        image: { type: 'string', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: post => `/posts/${post._raw.flattenedPath}`,
        },
        formattedDate: {
            type: 'string',
            resolve: post => format(parse(post.date, 'dd-MM-yyyy', new Date()), 'yyyy-MM-dd'),
        },
    },
}))

export default makeSource({
    contentDirPath: 'src/posts',
    documentTypes: [Post],
})
