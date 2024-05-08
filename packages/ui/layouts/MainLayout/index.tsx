'use client'

import * as React from 'react'
import type { MainLayoutProps } from './types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header
                links={[
                    { link: '/', label: 'Home' },
                    // { link: '/talks', label: 'Talks' },
                    { link: '/leerdoelen', label: 'Leerdoelen' },
                    { link: 'https://tristanbrattinga.github.io/hackathon/', label: 'Hackathon' },
                ]}
            />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
