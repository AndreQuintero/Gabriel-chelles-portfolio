import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  margin-top: 6.4rem;
  padding-bottom: 6.4rem;
  ${media.greaterThan('medium')`
        margin-top: 12.8rem;
        padding-bottom: 12.8rem;
    `}
`
export const Title = styled(motion.h1)`
  ${({ theme }) => css`
    font-family: ${theme.colors.secondary};
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 6.4rem;
    ${media.greaterThan('medium')`
      font-size: 7.2rem;
      margin-bottom: 12.8rem;
    `}
  `}
`
