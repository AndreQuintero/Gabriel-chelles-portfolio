import { motion } from 'framer-motion'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(motion.section)`
  margin-top: 6.4rem;
  display: flex;
  justify-content: center;
  ${media.greaterThan('medium')`
        margin-top: 19.2rem;
    `}

  iframe {
    width: 100%;
    height: 46.4rem;
    border: none;

    ${media.greaterThan('medium')`
        height: 72rem;
    `}
  }
`
