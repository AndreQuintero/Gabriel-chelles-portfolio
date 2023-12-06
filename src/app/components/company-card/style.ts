import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 13.9rem;
    display: flex;
    transition: ${theme.transition};

    justify-content: center;
    align-items: center;
    position: relative;
    ${media.greaterThan('medium')`
        width: 41.8rem;
        height: 20.5rem;
    `}
  `}
`

export const Image = styled.img`
  object-fit: contain;
  width: 15.8rem;
  height: 5.5rem;
  ${media.greaterThan('medium')`
    width: 20rem;
    height: 9.9rem;
  `}
`
