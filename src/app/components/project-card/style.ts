import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h4`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    font-family: ${theme.fonts.style.primary};
    font-size: 2.4rem;
    color: ${theme.colors.secondary};
    font-weight: 400;
    transition: ${theme.transition};

    ${media.greaterThan('medium')`
      margin-top: 3.2rem;
      font-size: 4rem;
    `}
  `}
`

export const Wrapper = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  &:hover h4 {
    text-decoration: underline;
  }

  ${media.greaterThan('medium')`
    width: 58.6rem;
  `}
`
