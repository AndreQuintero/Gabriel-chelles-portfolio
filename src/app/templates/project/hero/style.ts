import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding: 6.4rem 0;

  ${media.greaterThan('medium')`
        padding: 10.4rem 0;
    `}
`

export const Title = styled(motion.h1)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 2.8rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 7.2rem;
    `}
  `}
`

export const Subtitle = styled(motion.h4)`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        margin-top: 4.8rem;
        font-size: 2.4rem;
    `}
  `}
`

export const VisitWrapper = styled(motion.div)`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  ${media.greaterThan('medium')`
    margin-top: 4.8rem;
    gap: 0.8rem;
  `}
`

export const Text = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 1.4rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 2.4rem;
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.secondary};
    text-decoration-line: underline;
    ${media.greaterThan('medium')`
        font-size: 2.4rem;
    `}
    &:hover {
      color: #308cf4;
    }
  `}
`
