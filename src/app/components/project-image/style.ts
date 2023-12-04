import { motion } from 'framer-motion'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: 35.4rem;
  position: relative;
  ${media.greaterThan('medium')`
      height: 63.2rem;
  `}
`

export const ProjectImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 150ms ease-in;
`
export const ImgWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`
