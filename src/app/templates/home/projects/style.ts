import { motion } from 'framer-motion'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  margin-top: 6.4rem;
  ${media.greaterThan('medium')`
        margin-top: 12.8rem;
    `}
`

export const MosaicGrid = styled.div`
  display: grid;

  ${media.lessThan('large')`
        place-items: center;
        gap: 6.4rem;
    `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(auto-fill, minmax(58.6rem, 1fr));
    > *:nth-child(even) {
        grid-row: span 2;
        grid-column: span 2;
        margin-left: auto;
        margin-top: -60rem;
    }
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

export const ProjectCardWrapper = styled(motion.div)`
  display: block;
`
