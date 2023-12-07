'use client'
import { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, Theme } from '@/app/style/theme'
import { useTheme } from '@/app/providers/ThemeProvider'

type Props = {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  const { theme } = useTheme()

  const themetype = theme === Theme.LIGHT ? lightTheme : darkTheme
  return <ThemeProvider theme={themetype}>{children}</ThemeProvider>
}
