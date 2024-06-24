'use client'
import React, { PropsWithChildren, useState } from 'react'

interface StoreContext {
    gridView: boolean
    setViewMode: (isGridView: boolean) => void
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
    const [gridView, setGridView] = useState<boolean>(false)

    const setViewMode = (isGridView: boolean) => {
        setGridView(isGridView)
    }

    return (
        <StoreContext.Provider
            value={{
                gridView,
                setViewMode,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
