import localFont from 'next/font/local'

export const inter = localFont({
    src: '../../../../packages/ui/static/fonts/Inter-VariableFont.ttf',
    variable: '--font-inter',
    display: 'swap',
})

export const nohemi = localFont({
    src: '../../../../packages/ui/static/fonts/Nohemi-VF.ttf',
    variable: '--font-nohemi',
    display: 'swap',
})
