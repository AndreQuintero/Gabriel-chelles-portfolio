import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Banner = styled.section<{ $url: string }>`
  ${({ $url }) => css`
    width: 100%;
    height: 33.5rem;
    background-image: url(${$url});
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${media.greaterThan('medium')`
        height: 72rem;
        background-attachment: fixed;
    `}
  `}
`
