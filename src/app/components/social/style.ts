import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${media.greaterThan('medium')`
    flex-direction: row;
    gap: 2.4rem;
  `}
`
