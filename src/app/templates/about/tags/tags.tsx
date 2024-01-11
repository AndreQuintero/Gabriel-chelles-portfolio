'use client'
import { useViewDetect } from '@/app/hooks'
import * as S from './style'
import { Container } from '@/app/components/container'
import { TagsSlider } from '@/app/components/tags-slider'
import { Tag } from '@/app/components/tag'

export type TagsProps = {
  tags?: Array<string>
}
export const Tags = ({ tags = [] }: TagsProps) => {
  const { isMobile } = useViewDetect()
  return (
    <S.Wrapper>
      {isMobile ? (
        <Container ignoreRightPadding>
          <TagsSlider tags={tags} />
        </Container>
      ) : (
        <Container>
          <S.TagsWrapper>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.TagsWrapper>
        </Container>
      )}
    </S.Wrapper>
  )
}
