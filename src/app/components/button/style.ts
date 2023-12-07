import { Theme } from '@/app/style/theme'
import styled, { DefaultTheme, css } from 'styled-components'

const variants = {
  primary: (theme: DefaultTheme) => css`
    ${theme.theme === Theme.LIGHT ? btnLight(theme) : btnDark(theme)}
  `,
  secondary: (theme: DefaultTheme) => css`
    ${theme.theme === Theme.LIGHT ? btnDark(theme) : btnLight(theme)}
  `
}

const btnLight = (theme: DefaultTheme) => css`
  background-color: #f8f8f8;
  color: #010001;
  border: 1px solid #000;

  svg > path {
    fill: #010001;
    transition: ${theme.transition};
  }

  &:hover {
    background-color: #010001;
    border: 1px solid #f8f8f8;
    color: #fff;

    svg > path {
      fill: #fff;
    }
  }
`

const btnDark = (theme: DefaultTheme) => css`
  background-color: #010001;
  color: #fff;
  border: 1px solid #f8f8f8;

  svg > path {
    fill: #fff;
    transition: ${theme.transition};
  }

  &:hover {
    background-color: #fff;
    color: #0e0e0e;
    border: 1px solid #000;

    svg > path {
      fill: #0e0e0e;
    }
  }
`

export const Button = styled.button<{
  $colorScheme: 'primary' | 'secondary'
}>`
  ${({ theme, $colorScheme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.6rem;
    font-weight: 400;

    display: inline-flex;
    padding: 0.8rem 3.2rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    appearance: none;
    transition: ${theme.transition};
    cursor: pointer;
    ${variants[$colorScheme](theme)}
  `}
`
