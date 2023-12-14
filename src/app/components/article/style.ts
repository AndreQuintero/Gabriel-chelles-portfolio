import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  padding-bottom: 2.4rem;
  ${media.greaterThan('medium')`
        padding-bottom: 8.8rem;
    `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    ${media.greaterThan('medium')`
        font-size: 2.4rem;
        margin-bottom: 1.6rem;
        grid-column-start: 1;
        grid-column-end: 7;
    `}
  `}
`

export const TextWrapper = styled.div`
  ${media.greaterThan('medium')`
    grid-column-start: 1;
    grid-column-end: 7;
  `}
`

export const Text = styled.p`
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

export const ListWrapper = styled.div`
  margin-bottom: 0.8rem;
  ${media.greaterThan('medium')`
        margin-bottom: 1.6rem;
        grid-column-start: 1;
        grid-column-end: 7;
    `}
`

export const ImagesWrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  ${media.greaterThan('medium')`
    margin-top: 3.2rem;
    gap: 3.2rem;
  `}
`

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const Image = styled.img<{ $fullWidth?: boolean }>`
  ${({ $fullWidth }) => css`
    ${$fullWidth && 'width: 100%;'}
    max-width: 131.4rem;
    object-fit: cover;
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`
