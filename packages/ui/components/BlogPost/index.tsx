import { BlogPostProps } from './types'

const BlogPost = ({ title, lecturer, content, reflection }: BlogPostProps) => {
    return (
        <section className="container flex flex-col gap-10 my-16 lg:my-32 border border-white rounded-3xl p-10 max-w-5xl">
            <article>
                <h2 className="text-5xl mb-2">{title}</h2>
                <p className="text-xl mb-10">Lecturer: {lecturer}</p>
                <div
                    className="flex flex-col gap-4 [&_li]:list-decimal [&_li]:list-inside"
                    dangerouslySetInnerHTML={{ __html: String(content) }}
                />
            </article>
            <article>
                <h3 className="text-2xl">Reflectie</h3>
                <p>{reflection}</p>
            </article>
        </section>
    )
}

export default BlogPost
