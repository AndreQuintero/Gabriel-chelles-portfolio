import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeroSection = styled.section`
  margin-top: 6.4rem;
  ${media.greaterThan('medium')`
        margin-top: 19.6rem;
    `}
`

export const Apresentation = styled(motion.h2)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 1.8rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 4.8rem;
    `}
  `}
`
export const Name = styled.span`
  font-weight: 600;
`

export const Description = styled(motion.h1)`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    font-family: ${theme.fonts.style.primary};
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 7.2rem;
        margin-top: 4rem
    `}
  `}
`

export const Highlight = styled.span`
  color: #1a70d0;
`
export const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;
  gap: 1.6rem;

  ${media.greaterThan('medium')`
    flex-direction: row;
    gap: 2.4rem;
    margin-top: 6.4rem;
  `}
`
