import { Theme } from '@/app/style/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wraper = styled.section`
  ${({ theme }) => css`
    padding: 2.4rem 0;
    border-bottom: 1px solid
      ${theme.theme === Theme.LIGHT ? '#E0E0E0' : '#202020'};

    ${media.greaterThan('medium')`
        padding: 4.8rem 0;
    `}
  `}
`

export const Details = styled.div<{ $position: 'left' | 'right' }>`
  ${({ $position }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    ${$position === 'right' && 'margin-top: 2.4rem;'};
    ${media.greaterThan('medium')`
        ${$position === 'right' && 'margin-top: 0;'};
        gap: 1.6rem;
        grid-column-start: ${$position === 'left' ? 1 : 8};
        grid-column-end: ${$position === 'left' ? 6 : 12};
    `}
  `}
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
