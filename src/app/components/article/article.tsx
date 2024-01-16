import { List } from '../list'
import * as S from './style'
import { Container } from '../container'
import { TextGrid } from '../text-grid'
import { ArticleGridType } from '@/app/templates/project/articles'
import { fadeIn } from '@/app/motion'
import { ImageData, RichTextEditorData } from '@/app/graphql/types'
import { RichTextEditor } from '../rich-text-editor'

export type ArticleProps = {
  title?: string
  introduction?: Array<RichTextEditorData>
  items?: Array<RichTextEditorData>
  conclusion?: Array<RichTextEditorData>
  images?: Array<ImageArticleProps>
  gridType?: ArticleGridType
  showcases?: Array<ImageArticleProps>
}

export type ImageArticleProps = {
  image: ImageData
  fullWidth?: boolean
}

export const Article = ({
  title,
  introduction = [],
  items = [],
  conclusion = [],
  images = [],
  gridType = 'single',
  showcases = []
}: ArticleProps) => {
  return (
    <S.Wrapper $gridtype={gridType}>
      <Container>
        <TextGrid>
          {!!title && (
            <S.Title
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              $gridtype={gridType}>
              {title}
            </S.Title>
          )}
          {introduction.length > 0 && (
            <S.TextWrapper
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              $gridtype={gridType}>
              {introduction?.map((intro, index) => (
                <S.Text key={`${intro}-${index}`}>
                  <RichTextEditor item={intro} />
                </S.Text>
              ))}
            </S.TextWrapper>
          )}
          {items.length > 0 && (
            <S.ListWrapper $gridtype={gridType}>
              <List items={items} />
            </S.ListWrapper>
          )}
          {conclusion.length > 0 && (
            <S.TextWrapper
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              $gridtype={gridType}>
              {conclusion.map((text, index) => (
                <S.Text key={`${text}-${index}`}>
                  <RichTextEditor item={text} />
                </S.Text>
              ))}
            </S.TextWrapper>
          )}
        </TextGrid>
      </Container>

      {images.length > 0 && (
        <Container ignorePaddingOnMobile>
          <S.ImagesWrapper>
            {images.map((image, index) => (
              <S.ImageWrapper
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={`${image?.image?.imagem?.url}-${index}`}>
                <S.Image
                  $gridtype={gridType}
                  $fullWidth={image.fullWidth}
                  src={image?.image?.imagem?.url}
                  loading="lazy"
                  alt={image?.image?.description}
                />
              </S.ImageWrapper>
            ))}
          </S.ImagesWrapper>
        </Container>
      )}
      {showcases.length > 0 && (
        <Container ignorePaddingOnMobile>
          <S.ShowCaseWrapper>
            {showcases.map((showcase, index) => (
              <S.ImageWrapper
                variants={fadeIn(0.2 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={`showcase-${showcase?.image?.imagem?.url}-${index}`}>
                <S.Image
                  $gridtype={gridType}
                  $fullWidth={true}
                  src={showcase?.image?.imagem?.url}
                  loading="lazy"
                  alt={showcase?.image?.description}
                />
              </S.ImageWrapper>
            ))}
          </S.ShowCaseWrapper>
        </Container>
      )}
    </S.Wrapper>
  )
}
