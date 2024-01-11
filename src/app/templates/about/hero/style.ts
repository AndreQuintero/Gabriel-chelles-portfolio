import { motion } from 'framer-motion'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding-top: 6.4rem;
  padding-bottom: 4.4rem;
  ${media.greaterThan('medium')`
        padding-top: 12.8rem;
        padding-bottom: 6.4rem;
    `}
`

export const GridHero = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  ${media.greaterThan('medium')`
    grid-template-areas: "title picture"
                         "description picture";
    grid-template-rows: auto;
    column-gap: 11.8rem;
    position: relative;
  `}
`

export const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 3.2rem;
  ${media.greaterThan('medium')`
    grid-area: title;
    font-size: 7.2rem;
    margin-top: 3.5rem;
    margin-bottom: 0;
  `}
`

export const PictureWrapper = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    height: 47.5rem;
    position: relative;
    background-color: ${theme.colors.tertiary};
    ${media.greaterThan('medium')`
        grid-area: picture;
        width: 44.2rem;
        height: 64rem;
        position: sticky;
        top: 0;
    `}
  `}
`

export const Picture = styled(Image)`
  object-fit: cover;
`

export const DescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  ${media.greaterThan('medium')`
    grid-area: description;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
        font-size: 1.6rem;
    `}
  `}
`
