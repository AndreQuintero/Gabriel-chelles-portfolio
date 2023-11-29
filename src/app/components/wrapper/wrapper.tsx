'use client'
import { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, Theme } from '@/app/style/theme'
type Props = {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  const [themeType, setThemeType] = useState<Theme>(Theme.LIGHT)
  const toggleTheme = () =>
    themeType === Theme.LIGHT
      ? setThemeType(Theme.DARK)
      : setThemeType(Theme.LIGHT)
  const theme = () => (themeType === Theme.LIGHT ? lightTheme : darkTheme)
  return (
    <ThemeProvider theme={theme()}>
      {children}
      <button onClick={toggleTheme}>change theme</button>
    </ThemeProvider>
  )
}
