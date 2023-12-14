import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding-top: 2.4rem;
  ${media.greaterThan('medium')`
        padding-top: 4.8rem;
    `}
`
