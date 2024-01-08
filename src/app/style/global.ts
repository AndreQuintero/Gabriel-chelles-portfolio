'use client'
import { createGlobalStyle, css } from 'styled-components'

export const GlobalCss = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 62.5%;
        scroll-behavior: smooth;
      }

      body {
        font-style: ${theme.fonts.style.primary};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        transition: ${theme.transition};
      }
    `}
`
