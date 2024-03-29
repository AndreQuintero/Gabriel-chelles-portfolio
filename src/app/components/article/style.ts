import { ArticleGridType } from '@/app/templates/project/articles'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const variants = {
  single: () => css`
    grid-column-start: 1;
    grid-column-end: 7;
  `,
  multi: () => css``
}

type Grid = {
  $gridtype: ArticleGridType
}

export const Wrapper = styled.article<Grid>`
  ${({ $gridtype }) => css`
    padding-bottom: 2.4rem;
    ${media.greaterThan('medium')`
        ${$gridtype === 'single' && 'padding-bottom: 8.8rem;'};
    `}
  `}
`

export const Title = styled(motion.h3)<Grid>`
  ${({ theme, $gridtype }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    ${media.greaterThan('medium')`
        font-size: 2.4rem;
        margin-bottom: 1.6rem;
       ${variants[$gridtype]};
    `}
  `}
`

export const TextWrapper = styled(motion.div)<Grid & { $hasGap?: boolean }>`
  ${({ $gridtype, $hasGap }) => css`
    ${media.greaterThan('medium')`
      ${variants[$gridtype]};
      ${!!$hasGap && 'margin-top: 1.6rem;'};
    `}
  `}
`

// in the begging was a P tag, but because of the cms format, i had to change to a div tag
export const Text = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0.8rem;
    ${media.greaterThan('medium')`
        font-size: 1.6rem;
        margin-bottom: 1.6rem;
    `}
  `}
`

export const ListWrapper = styled.div<Grid>`
  ${({ $gridtype }) => css`
    margin-bottom: 0.8rem;
    ${media.greaterThan('medium')`
          margin-bottom: 1.6rem;
          ${variants[$gridtype]};
    `}
  `}
`

export const ImagesWrapper = styled(motion.div)`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  ${media.greaterThan('medium')`
    margin-top: 3.2rem;
    gap: 3.2rem;
  `}
`

export const ImageWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
`

export const Image = styled.img<{
  $fullWidth?: boolean
  $gridtype: ArticleGridType
}>`
  ${({ theme, $fullWidth, $gridtype }) => css`
    ${$fullWidth && 'width: 100%;'}
    max-width: 131.4rem;
    object-fit: cover;
    background-color: ${theme.colors.tertiary};
    ${$gridtype === 'multi' && 'width: 100%;'}
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`
export const WrapperMultiArticles = styled.div`
  padding-bottom: 8.8rem;
`

export const GridMultiArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
  `}
`
export const ShowCaseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0.8rem;
  margin-top: 2.5rem;
  ${media.greaterThan('medium')`
    grid-column-gap: 3rem;
    margin-top: 3.2rem;
  `}
`
