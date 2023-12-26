import { motion } from 'framer-motion'
import styled from 'styled-components'
import media from 'styled-media-query'

export const ProjectCardWrapper = styled(motion.div)`
  display: block;
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
