import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 1.6rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  ${media.greaterThan('medium')`
    padding: 2.4rem 4.8rem;
  `}
`

export const PortfolioName = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    color: ${theme.colors.secondary};
    font-size: 2.4rem;
    font-weight: 400;
  `}
`

export const MenuMobile = styled(motion.menu)`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 4.8rem);
    background-color: ${theme.colors.primary};
    position: fixed;
    z-index: 9;
  `}
`
