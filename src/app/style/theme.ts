import { DefaultTheme } from 'styled-components'

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

const theme: DefaultTheme = {
  fonts: {
    style: {
      primary: 'var(--font-outfit)',
      secondary: 'var(--font-poppins)'
    }
  }
}

export const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    primary: '#F8F8F8',
    secondary: '#010001'
  },
  theme: Theme.LIGHT
}
export const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    primary: '#0E0E0E',
    secondary: '#F8F8F8'
  },
  theme: Theme.DARK
}
