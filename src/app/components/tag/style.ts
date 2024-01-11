import { Theme } from '@/app/style/theme'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 1.2rem 1.6rem;
    background-color: ${theme.theme === Theme.LIGHT ? '#EFEFEF' : '#252525'};
    border-radius: 9.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    transition: ${theme.transition};
    text-align: center;

    ${media.greaterThan('medium')`
        font-size: 1.6rem;
    `}
  `}
`
