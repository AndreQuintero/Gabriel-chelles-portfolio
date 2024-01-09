import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``

export const Hero = styled.div`
  padding: 6.4rem 0;
  ${media.greaterThan('medium')`
    padding: 12.8rem 0;
  `}
`

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  ${media.greaterThan('medium')`
    font-size: 7.2rem;
  `}
`

export const Text = styled(Title)``
