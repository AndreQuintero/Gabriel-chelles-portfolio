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

export const MoreProjects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6.4rem;

  ${media.greaterThan('medium')`
        margin-top: 13.6rem;
        flex-direction: row;
    `}
`
