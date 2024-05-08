'use client'

import MoonIcon from '../../icons/MoonIcon'
import SunIcon from '../../icons/SunIcon'
import clsx from 'clsx'
import { useState } from 'react'

export const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleCorrectIcon = () => {
        if (darkMode) {
            return darkMode ? (
                <>
                    <MoonIcon /> <SunIcon />
                </>
            ) : (
                <>
                    <MoonIcon />
                    <SunIcon />
                </>
            )
        } else {
            return darkMode ? (
                <>
                    <SunIcon /> <MoonIcon />
                </>
            ) : (
                <>
                    <SunIcon />
                    <MoonIcon />
                </>
            )
        }
    }

    return (
        <button
            className="flex flex-col gap-2 items-center w-8 h-8 overflow-hidden"
            onClick={() => setDarkMode(!darkMode)}
        >
            <div
                className={clsx('transition-all duration-200 ease-in-out', {
                    '-translate-y-8': darkMode,
                    'translate-y-0': !darkMode,
                })}
            >
                <span>{handleCorrectIcon()}</span>
            </div>
        </button>
    )
}
