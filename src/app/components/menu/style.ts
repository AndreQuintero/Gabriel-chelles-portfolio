import styled, { css } from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 2.4rem 4.8rem;
  justify-content: space-between;
  align-items: center;
`

export const PortfolioName = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    color: ${theme.colors.secondary};
    font-size: 24px;
    font-weight: 400;
  `}
`

export const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 6.4rem;
`
export const Link = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    color: ${theme.colors.secondary};
    position: relative;

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
      margin: 2.5rem auto;
    }
    &:hover::after {
      width: 100%;
      background: ${theme.colors.secondary};
    }
  `}
`
