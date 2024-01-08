import { Theme } from '@/app/style/theme'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Greetings = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.theme === Theme.LIGHT ? '#131313' : '#CACACA'};
    ${media.greaterThan('medium')`
        font-size: 4rem;
    `}
  `}
`

export const Email = styled.h1`
  ${({ theme }) => css`
    margin-top: 0.8rem;
    font-family: ${theme.fonts.style.secondary};
    font-size: 2rem;
    font-style: italic;
    font-weight: 400;
    text-decoration-line: underline;
    color: ${theme.colors.secondary};
    ${media.greaterThan('medium')`
        font-size: 6rem;
    `}
    &:hover {
      color: #308cf4;
    }
  `}
`

export const SocialWrapper = styled.div`
  margin-top: 3.2rem;
  ${media.greaterThan('medium')`
    margin-top: 4.8rem;
  `}
`
