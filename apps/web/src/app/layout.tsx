import 'ui/styles/global.css'
import React from 'react'
import { inter, nohemi } from '@lib/fonts'
import MainLayout from 'ui/layouts/MainLayout'
import { Providers } from './providers'
import { Viewport } from 'next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${nohemi.variable}`}>
            <body>
                <Providers>
                    <MainLayout>{children}</MainLayout>
                </Providers>
            </body>
        </html>
    )
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#202124',
}
