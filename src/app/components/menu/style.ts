import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: 1.6rem;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background-color: ${theme.colors.primary};
    top: 0;
    z-index: 10;
    transition: all 200ms ease-in;
    ${media.greaterThan('medium')`
    padding: 2.4rem 4.8rem;
  `}
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
    display: flex; /* flex-wrap: wrap; */
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: background-color 200ms ease-in;
  `}
`
export const ContactWrapper = styled.div`
  border-top: 1px solid #393939;
  width: 100%;
  padding: 1.6rem;
  padding-top: 3.2rem;
  padding-bottom: 6.7rem;
`
