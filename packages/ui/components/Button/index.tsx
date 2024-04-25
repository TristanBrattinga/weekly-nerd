'use client'

import { createElement } from 'react'
import { ButtonProps, ButtonRenderComponent, ButtonVariants } from './types'
import clsx from 'clsx'

const Button = <T extends ButtonRenderComponent>({
    as = 'button',
    className,
    variant = 'primary',
    onClick,
    loading = false,
    disabled = false,
    children,
    ...props
}: ButtonProps<T>) => {
    const typedProps: any = props

    const buttonVariants: Record<ButtonVariants, string> = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
    }

    typedProps.className = clsx(
        'btn',
        buttonVariants[variant],
        {
            disabled: disabled || loading,
        },
        className,
    )

    typedProps.onClick = (e: any) => {
        if (!loading && !disabled) {
            if (onClick) {
                onClick(e)
            } else {
                // e.preventDefault()
            }
        }
    }

    return createElement(as, typedProps, <>{children}</>)
}

export default Button
