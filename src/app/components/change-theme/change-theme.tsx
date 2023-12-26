/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react'
import { ObserverComponentVisibility } from '../observer-component-visibility'
import { Theme } from '@/app/style/theme'
import { useTheme } from '@/app/providers/ThemeProvider'
import { usePathname } from 'next/navigation'

type ChangeThemeProps = {
  children: ReactNode
}
export const ChangeTheme = ({ children }: ChangeThemeProps) => {
  const { setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setTheme(Theme.LIGHT)
  }, [pathname])
  return (
    <ObserverComponentVisibility
      onComponentVisible={() => setTheme(Theme.DARK)}
      onComponentHidden={() => setTheme(Theme.LIGHT)}>
      {children}
    </ObserverComponentVisibility>
  )
}
