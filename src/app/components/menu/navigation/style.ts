import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav``

export const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 6.4rem;
  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    height: 100%;
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    color: ${theme.colors.secondary};
    position: relative;

    ${media.greaterThan('medium')`
      font-size: 1.8rem;
    `}

    &::after {
      content: '';
      display: block;
      width: 0;
      position: absolute;
      background: transparent;
      transition: all 0.3s;
      height: 2px;
      left: 0;
      right: 0;
      margin: auto;

      ${media.greaterThan('medium')`
        margin: 2.5rem auto;
      `}
    }
    &:hover::after {
      width: 100%;
      background: ${theme.colors.secondary};
    }
  `}
`
