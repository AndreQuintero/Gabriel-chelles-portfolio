import { ReactNode } from 'react'
import { ObserverComponentVisibility } from '../observer-component-visibility'
import { Theme } from '@/app/style/theme'
import { useTheme } from '@/app/providers/ThemeProvider'

type ChangeThemeProps = {
  children: ReactNode
}
export const ChangeTheme = ({ children }: ChangeThemeProps) => {
  const { setTheme } = useTheme()

  return (
    <ObserverComponentVisibility
      onComponentVisible={() => setTheme(Theme.DARK)}
      onComponentHidden={() => setTheme(Theme.LIGHT)}>
      {children}
    </ObserverComponentVisibility>
  )
}
