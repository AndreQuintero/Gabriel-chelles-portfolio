import { Theme } from '@/app/style/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-top: 6.4rem;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid
      ${theme.theme === Theme.LIGHT ? '#E0E0E0' : '#202020'};
    ${media.greaterThan('medium')`
        padding-top: 10.4rem;
        padding-bottom: 4.8rem;
    `}
  `}
`
export const Description = styled(motion.p)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
    font-size: 1.6rem;
    grid-column-start: 1;
    grid-column-end: 6;
  `}
  `}
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 2.4rem;
  ${media.greaterThan('medium')`
        gap: 3.2rem;
        margin-top: 0;
        grid-column-start: 8;
        grid-column-end: 12;
    `}
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  ${media.greaterThan('medium')`
    gap: 1.6rem;
  `};
`

export const Title = styled(motion.h4)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 1.6rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 2.4rem;
    `}
  `}
`

export const Information = styled(motion.p)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 1.6rem;
    `}
  `}
`
