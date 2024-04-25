import * as React from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'

export type GetRenderComponentProps<T> = T extends React.ComponentType
    ? Omit<React.ComponentProps<T>, 'as'>
    : T extends 'a'
      ? React.HTMLProps<T>
      : {}

export type ButtonRenderComponent = 'a' | 'button' | typeof Link

export type ButtonVariants = 'primary' | 'secondary' | 'dark' | 'white' | 'contact' | 'selected'

export type ButtonProps<T extends ButtonRenderComponent> = {
    as?: ButtonRenderComponent
    className?: string
    onClick?: (e: any) => void
    loading?: boolean
    disabled?: boolean
    type?: string
    variant?: ButtonVariants
    children?: ReactNode
} & GetRenderComponentProps<T>

export type ButtonItem = {
    variant?: ButtonVariants
    label: string
}
