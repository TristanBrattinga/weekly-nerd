'use client'

import { PostListProps } from './types'
import Post from '../Post'
import { useAnimations } from '../../utils/animations'
import clsx from 'clsx'
import ToggleView from '../ToggleView'
import { useStore } from 'web/src/lib/context/store-context'

const PostList = ({ posts }: PostListProps) => {
    const { ref, inView } = useAnimations()
    const { gridView } = useStore()

    return (
        <section
            className={clsx('container my-16 lg:my-32', {
                'max-w-4xl': !gridView,
            })}
        >
            <ToggleView />
            <ul
                className={clsx('', {
                    'grid grid-cols-2 xl:grid-cols-3 gap-10': gridView,
                    '': !gridView,
                })}
            >
                {posts.map((post, index) => (
                    <li
                        ref={ref}
                        key={index}
                        className={clsx('', {
                            'even:translate-x-10 odd:-translate-x-10 mb-10': !gridView,
                            // 'even:translate-y-10 odd:-translate-y-10 mb-10': gridView,
                        })}
                    >
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PostList
