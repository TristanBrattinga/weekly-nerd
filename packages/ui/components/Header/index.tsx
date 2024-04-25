import { HeaderProps } from './types'
import Link from 'next/link'

const Header = ({ links }: HeaderProps) => {
    return (
        <header>
            <nav>
                <ul>
                    {links?.map((link, index) => (
                        <li key={index}>
                            <Link href={link.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
