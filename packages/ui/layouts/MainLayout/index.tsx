'use client'

import * as React from 'react'
import type { MainLayoutProps } from './types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import ToTopButton from '../../components/ToTopButton'

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header
                avatar="/images/me.jpeg"
                links={[
                    { link: '/posts', label: 'Posts' },
                    { link: '/goals', label: 'Leerdoelen' },
                    { link: 'https://tristanbrattinga.github.io/hackathon/', label: 'Hackathon', outbound: true },
                    { link: 'https://www.tristanbrattinga.com/', label: 'Portfolio', outbound: true },
                ]}
            />
            <Menu />
            <ToTopButton />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
