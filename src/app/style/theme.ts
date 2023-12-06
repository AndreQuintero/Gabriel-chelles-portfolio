import { DefaultTheme } from 'styled-components'

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

type StandardTheme = Pick<DefaultTheme, 'fonts' | 'transition'>

const theme: StandardTheme = {
  fonts: {
    style: {
      primary: 'var(--font-outfit)',
      secondary: 'var(--font-poppins)'
    }
  },
  transition: 'all 0.2s ease-in;'
}

export const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    primary: '#F8F8F8',
    secondary: '#010001',
    tertiary: '#EFEFEF'
  },
  theme: Theme.LIGHT
}
export const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    primary: '#0E0E0E',
    secondary: '#F8F8F8',
    tertiary: '#010001'
  },
  theme: Theme.DARK
}
