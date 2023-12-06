import styled from 'styled-components'
import media from 'styled-media-query'

export const ShowcaseGrid = styled.div`
  margin-top: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  ${media.greaterThan('medium')`
    margin-top: 3.2rem;
  `}
`
