import NextImage from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div<{ $color: string; $text: 'light' | 'dark' }>`
  ${({ $color, $text }) => css`
    color: ${$text === 'dark' ? '#010001' : '#F8F8F8'};
    width: 100%;
    height: 81.7rem;
    background-color: ${$color};
    padding: 6.4rem 1.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;
    overflow: hidden;
    transition: all 0.3s ease-in;
    ${media.greaterThan('medium')`
        flex-direction: row;
        gap: 11.6rem;
        height: 41.2rem;
        padding: 2.4rem;
        padding-left: 13.6rem;
        &:hover {
            ${Image} {
                transform: scale(1.15);
            }
        }
    `}
  `}
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  ${media.greaterThan('medium')`
    flex-grow: 1;
  `}
`

export const SubTitle = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.secondary};
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    ${media.greaterThan('medium')`
        font-size: 1.8rem;
        text-align: left;
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.fonts.style.primary};
    font-size: 2.8rem;
    font-weight: 400;
    text-align: center;

    ${media.greaterThan('medium')`
        font-size: 4rem;
        text-align: left;
    `}
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 26.6rem;
  ${media.greaterThan('medium')`
    width: 45.2rem;
    height: 36.4rem;
  `}
`

export const Image = styled(NextImage)`
  object-fit: cover;
  transition: transform 300ms ease-in;
`
