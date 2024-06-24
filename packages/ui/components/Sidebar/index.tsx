import Link from 'next/link'
import ArrowIcon from '../../icons/ArrowIcon'
import { SidebarProps } from './types'

const Sidebar = ({ post }: SidebarProps) => {
    return (
        <aside className="border border-white rounded-2xl p-6 min-w-60 h-fit lg:sticky top-32">
            <Link href="/posts" className="remove styling flex gap-1 items-center group">
                <ArrowIcon className="transition-transform duration-300 group-hover:-translate-x-1" />
                Terug
            </Link>
            <div className="w-full h-px bg-white my-4" />
            <ul>
                {/*{projects.map(project => (*/}
                {/*    <li key={project.title}>*/}
                {/*        <Link href={`#${slugifyString(project.title)}`} className="block py-2 link-ltr w-full">*/}
                {/*            {project.title}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>
        </aside>
    )
}

export default Sidebar
