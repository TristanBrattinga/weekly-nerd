import 'ui/styles/global.css'
import React from 'react'
import { inter, nohemi } from '@lib/fonts'
import MainLayout from 'ui/layouts/MainLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${nohemi.variable} !scroll-smooth`}>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    )
}
