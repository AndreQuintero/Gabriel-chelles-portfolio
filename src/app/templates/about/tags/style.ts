import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding-bottom: 6.4rem;
  ${media.greaterThan('medium')`
     padding-bottom: 12.8rem;
  `}
`
export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`
