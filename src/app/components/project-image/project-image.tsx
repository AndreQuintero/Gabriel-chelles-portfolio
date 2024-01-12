'use client'

import * as S from './style'
import { CustomCursor, WithCustomCursor } from '../custom-cursor'
import { useRef, useState } from 'react'
import { ImageProps } from '../project-card'

type ProjectImageProps = {
  images: Array<ImageProps>
} & CustomCursor

const ProjectImage = ({ onMouseMove, images }: ProjectImageProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const SCREEN_TIME = 500

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
              loading="lazy"
            />
          </S.ImgWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default WithCustomCursor(ProjectImage)
