'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react'

// Create a context for the theme
type MenuContextProps = {
  isVisible: boolean
  setVisibility: (visibility: boolean) => void
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
)

// Create a provider component that will wrap your app
interface MenuProviderProps {
  children: ReactNode
  visible: boolean
}

export const MenuProvider: React.FC<MenuProviderProps> = ({
  children,
  visible
}) => {
  // Define the state for the menu visibility
  const [isVisible, setMenuVisibility] = useState(visible)

  const setVisibility = (visible: boolean) => setMenuVisibility(visible)

  // Provide the theme and the function to set the theme
  const contextValue: MenuContextProps = {
    isVisible,
    setVisibility
  }

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}

// Create a custom hook to consume the theme context
