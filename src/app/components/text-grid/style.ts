import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  ${media.greaterThan('medium')`
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 3rem;
    `}
`
