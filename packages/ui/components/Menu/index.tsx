'use client'

import { MenuProps } from './types'
import clsx from 'clsx'
import { scrollLock } from '../../utils/scrollLock'
import { useEffect } from 'react'
import { useMenu } from 'web/src/lib/context/menu-context'
import { sidebarSlideIn } from '../../utils/animations'
import { handleEscKeyPress } from '../../utils/handleEscKeyPress'
import CloseIcon from '../../icons/CloseIcon'
import Link from 'next/link'

const Menu = ({}: MenuProps) => {
    const { menuIsShown, closeMenu } = useMenu()

    useEffect(() => {
        if (menuIsShown) {
            scrollLock.enable()
            document.addEventListener('keydown', e => handleEscKeyPress(e, () => closeMenu()))
        } else {
            scrollLock.disable()
            document.removeEventListener('keydown', e => handleEscKeyPress(e, () => closeMenu()))
        }

        return () => {
            document.removeEventListener('keydown', e => handleEscKeyPress(e, () => closeMenu()))
        }
    }, [menuIsShown])

    return (
        <aside className="block lg:hidden">
            <div
                onClick={closeMenu}
                className={clsx('ease fixed inset-0 z-10 h-screen w-full bg-black/30 transition-all duration-700', {
                    'opacity-100': menuIsShown,
                    'pointer-events-none opacity-0': !menuIsShown,
                })}
            ></div>
            <div
                className={clsx(
                    'bg-clr-accent fixed right-0 top-0 z-50 h-screen w-screen p-5 md:w-1/2',
                    sidebarSlideIn(menuIsShown),
                )}
            >
                <div
                    className={clsx('mb-10 ml-auto w-fit cursor-pointer text-[30px] uppercase text-white md:mb-20')}
                    onClick={closeMenu}
                >
                    <CloseIcon className="[&_path]:stroke-black size-8" />
                </div>
                {/*<ul className="m-auto max-w-lg">*/}
                {/*    {links.map((link, index) => (*/}
                {/*        <li key={index} className="py-4">*/}
                {/*            <Link href={link.link} className="text-2xl text-black" onClick={closeMenu}>*/}
                {/*                {link.label}*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </aside>
    )
}

export default Menu
