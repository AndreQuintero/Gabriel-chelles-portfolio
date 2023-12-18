'use client'
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, Theme } from '@/app/style/theme'
import { useTheme } from '@/app/providers/ThemeProvider'
import { useRouter } from 'next/navigation'

type Props = {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  const { theme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [router])

  const themetype = theme === Theme.LIGHT ? lightTheme : darkTheme
  return <ThemeProvider theme={themetype}>{children}</ThemeProvider>
}
