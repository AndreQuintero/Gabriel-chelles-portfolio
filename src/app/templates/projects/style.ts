import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  margin-top: 6.4rem;
  padding-bottom: 6.4rem;
  ${media.greaterThan('medium')`
        margin-top: 12.8rem;
        padding-bottom: 12.8rem;
    `}
`
