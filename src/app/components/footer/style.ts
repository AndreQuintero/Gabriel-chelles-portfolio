import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding-top: 6.4rem;
    padding-bottom: 6.4rem;
    background-color: ${theme.colors.tertiary};
    transition: all 0.2s ease-in;

    ${media.greaterThan('medium')`
    padding-top: 12.8rem;
    padding-bottom: 14.2rem;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 2.4rem;
    font-weight: 400;

    ${media.greaterThan('medium')`
        font-size: 6.4rem;
    `}
  `}
`

export const Showcase = styled.h4`
  ${({ theme }) => css`
    margin-top: 6.4rem;
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        margin-top: 8.8rem;
        font-size: 2.4rem;
    `}
  `}
`

export const ContactWrapper = styled.div`
  margin-top: 6.4rem;
  ${media.greaterThan('medium')`
    margin-top: 18.3rem;
  `}
`
