import { List } from '../list'
import * as S from './style'
import { Container } from '../container'
import { TextGrid } from '../text-grid'
import { ArticleGridType } from '@/app/templates/project/articles'

export type ArticleProps = {
  title?: string
  introduction?: Array<string>
  items?: Array<string>
  conclusion?: Array<string>
  images?: Array<ImageArticleProps>
  gridType?: ArticleGridType
}

type ImageArticleProps = {
  url: string
  description: string
  fullWidth?: boolean
}

export const Article = ({
  title,
  introduction = [],
  items = [],
  conclusion = [],
  images = [],
  gridType = 'single'
}: ArticleProps) => {
  return (
    <S.Wrapper>
      <Container>
        <TextGrid>
          {!!title && <S.Title $gridtype={gridType}>{title}</S.Title>}
          {introduction.length > 0 && (
            <S.TextWrapper $gridtype={gridType}>
              {introduction?.map((intro, index) => (
                <S.Text key={`${intro}-${index}`}>{intro}</S.Text>
              ))}
            </S.TextWrapper>
          )}
          {items.length > 0 && (
            <S.ListWrapper $gridtype={gridType}>
              <List items={items} />{' '}
            </S.ListWrapper>
          )}
          {conclusion.length > 0 && (
            <S.TextWrapper $gridtype={gridType}>
              {conclusion.map((text, index) => (
                <S.Text key={`${text}-${index}`}>{text}</S.Text>
              ))}
            </S.TextWrapper>
          )}
        </TextGrid>
      </Container>

      {images.length > 0 && (
        <Container ignorePaddingOnMobile>
          <S.ImagesWrapper>
            {images.map((image) => (
              <S.ImageWrapper key={image.url}>
                <S.Image
                  $gridtype={gridType}
                  $fullWidth={image.fullWidth}
                  src={image.url}
                  alt={image.description}
                />
              </S.ImageWrapper>
            ))}
          </S.ImagesWrapper>
        </Container>
      )}
    </S.Wrapper>
  )
}
