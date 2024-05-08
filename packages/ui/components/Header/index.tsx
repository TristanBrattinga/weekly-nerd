import { HeaderProps } from './types'
import Link from 'next/link'
import { Toggle } from '../Toggle'
import Image from 'next/image'

const Header = ({ links }: HeaderProps) => {
    return (
        <header className="w-full">
            <nav className="container flex justify-between items-center py-4">
                <Link href="/" className="w-1/3 ">
                    <h1 className="font-nohemi text-2xl">Weekly Nerd</h1>
                </Link>
                <ul className="flex justify-center w-1/3 gap-4">
                    {links?.map((link, index) => (
                        <li key={index} className="uppercase text-center hover:underline transition-all duration-200">
                            <Link href={link.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end w-1/3"></div>
            </nav>
        </header>
    )
}

export default Header
