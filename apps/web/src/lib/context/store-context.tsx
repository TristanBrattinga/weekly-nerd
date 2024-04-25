'use client'
import React, { PropsWithChildren } from 'react'

interface StoreContext {
}

const StoreContext = React.createContext<StoreContext | null>(null)

export const useStore = () => {
    const context = React.useContext(StoreContext)
    if (context === null) {
        throw new Error('useStore must be used within a StoreProvider')
    }
    return context
}

export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {






    return (
        <StoreContext.Provider
            value={{

            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
