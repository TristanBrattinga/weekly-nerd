'use client'

import { HeaderProps } from './types'
import Link from 'next/link'
import { Toggle } from '../Toggle'
import Image from 'next/image'
import { useMenu } from 'web/src/lib/context/menu-context'
import HamburgerMenuIcon from '../../icons/HamburgerMenuIcon'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const Header = ({ links, avatar }: HeaderProps) => {
    const { showMenu } = useMenu()
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={clsx('w-full sticky top-0 z-10 transition-all duration-500', {
                'bg-black/75': isScrolled,
            })}
        >
            <nav className="container flex justify-between items-center py-6">
                <Link href="/" className="lg:w-1/3 ">
                    <h1 className="font-nohemi text-2xl text-nowrap leading-none">Weekly Nerd Blog</h1>
                </Link>
                <ul className="hidden lg:flex justify-center w-1/3 gap-4">
                    {links?.map((link, index) => (
                        <li key={index} className="uppercase text-center hover:underline transition-all duration-200">
                            <Link href={link.link} target={link.outbound ? '_blank' : ''}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end gap-4 md:w-1/3">
                    <Link
                        href="/profile"
                        className="size-6 bg-white rounded-full overflow-hidden hover:scale-150 origin-top-right transition-all duration-200"
                    >
                        <Image src={avatar} alt="" width={40} height={40} className="" />
                    </Link>
                    <button className="block md:hidden " onClick={() => showMenu()}>
                        <HamburgerMenuIcon />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
