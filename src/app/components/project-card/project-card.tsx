'use client'

import * as S from './style'
import { CustomCursor, WithCustomCursor } from '../custom-cursor'
import { useRef, useState } from 'react'

type ImageProps = {
  url: string
  description: string
}

type ProjectCardProps = {
  images: Array<ImageProps>
} & CustomCursor

const ProjectCard = ({ onMouseMove, images }: ProjectCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const SCREEN_TIME = 1000

  const handleImagesWhenHoverit = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((previous) =>
        previous === images.length - 1 ? 0 : previous + 1
      )
    }, SCREEN_TIME)
  }

  const handleImagesWhenLeaveIt = () => {
    setActiveIndex(0)
    clearInterval(intervalRef.current as NodeJS.Timeout)
  }
  return (
    <S.Wrapper
      onMouseMove={onMouseMove}
      onMouseEnter={handleImagesWhenHoverit}
      onMouseLeave={handleImagesWhenLeaveIt}>
      {images.map((img, index) => {
        const shoudDisplayIt = () => (activeIndex === index ? 1 : 0)
        return (
          <S.ImgWrapper
            key={img.url}
            initial={{
              opacity: shoudDisplayIt()
            }}
            animate={{
              opacity: shoudDisplayIt()
            }}
            transition={{
              delay: 0.15,
              ease: 'easeIn'
            }}>
            <S.ProjectImage
              fill
              style={{ objectFit: 'cover' }}
              src={img.url}
              alt={img.description}
            />
          </S.ImgWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default WithCustomCursor(ProjectCard)
