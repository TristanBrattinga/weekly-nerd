'use client'

import { PostProps } from './types'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useStore } from 'web/src/lib/context/store-context'
import { format, parseISO } from 'date-fns'

const Post = ({ post }: PostProps) => {
    const { gridView } = useStore()

    return (
        <Link
            href={`/posts/${post._raw.flattenedPath}`}
            className={clsx(
                'flex border rounded-3xl overflow-hidden focus-visible:scale-105 hover:scale-105 transition-all duration-300 h-full',
                {
                    'flex-col': gridView,
                    'flex-row': !gridView,
                },
            )}
        >
            <div
                className={clsx('', {
                    'w-full': gridView,
                    'w-1/3': !gridView,
                })}
            >
                <Image src={post.image} alt="" width={200} height={300} className="w-full h-full object-cover" />
            </div>
            <div
                className={clsx('flex flex-col justify-between  p-10', {
                    'w-full': gridView,
                    'w-2/3': !gridView,
                })}
            >
                <div>
                    <h2 className="text-accent font-semibold text-3xl mb-2">{post.title}</h2>
                    <p>Lecturer: {post.lecturer}</p>
                    <time dateTime={post.formattedDate} className="">
                        {format(parseISO(post.formattedDate), 'dd-MM-yyyy')}
                    </time>
                </div>
            </div>
        </Link>
    )
}

export default Post
