import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const List = styled.ul`
  padding-left: 2.2rem;
`

export const Item = styled.li<{ $space: 'small' | 'large' }>`
  ${({ theme, $space }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.8rem;
    &:first-child {
      margin-top: 0;
    }
    ${media.greaterThan('medium')`
        font-size: 1.6rem;
        margin-top: ${$space === 'small' ? '0.8rem' : '1.6rem'};
    `}
  `}
`
