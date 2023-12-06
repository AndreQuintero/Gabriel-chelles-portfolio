import 'styled-components'
import { Theme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
    }
    fonts: {
      style: {
        primary: string
        secondary: string
      }
    }
    theme: Theme
    transition: string
  }
}
