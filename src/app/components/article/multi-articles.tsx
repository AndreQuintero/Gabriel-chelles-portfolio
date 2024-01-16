'use client'
import { fadeIn } from '@/app/motion'
import { ArticleProps } from '.'
import { Container } from '../container'
import * as S from './style'
import { RichTextEditor } from '../rich-text-editor'
import { RichTextEditorData } from '@/app/graphql/types'

type MultiArticlesProps = {
  articles: Array<ArticleProps>
}

export const MultiArticles = ({ articles }: MultiArticlesProps) => {
  const hasGap = (text: Array<RichTextEditorData> | undefined) => {
    if (!text) return false
    return text.length > 0
  }
  return (
    <S.Wrapper $gridtype="multi">
      {articles.map((article, index) => {
        const shouldRenderArticleGrid = index % 2 === 0
        const even = index + 1
        const articleEven = articles[even]
        if (shouldRenderArticleGrid) {
          return (
            <S.WrapperMultiArticles
              key={`multi-article${article.title}-${index}`}>
              <Container>
                <S.GridMultiArticles>
                  <S.Title
                    variants={fadeIn(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    $gridtype="multi">
                    {article.title}
                  </S.Title>
                  {articleEven && (
                    <S.Title
                      variants={fadeIn(0.4)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      $gridtype="multi">
                      {articleEven.title}
                    </S.Title>
                  )}
                </S.GridMultiArticles>
                <S.GridMultiArticles>
                  <S.TextWrapper
                    variants={fadeIn(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    $gridtype="multi">
                    {article.introduction?.map((text, index) => (
                      <S.Text key={`${text}-${index}A`}>
                        <RichTextEditor item={text} />
                      </S.Text>
                    ))}
                  </S.TextWrapper>
                  {articleEven && (
                    <S.TextWrapper
                      variants={fadeIn(0.4)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      $gridtype="multi">
                      {articleEven.introduction?.map((text, index) => (
                        <S.Text key={`${text}-${index + 1}B`}>
                          <RichTextEditor item={text} />
                        </S.Text>
                      ))}
                    </S.TextWrapper>
                  )}
                </S.GridMultiArticles>
              </Container>

              <Container
                key={`${article.title}-${index}B`}
                ignorePaddingOnMobile>
                <S.GridMultiArticles>
                  <S.ImagesWrapper
                    variants={fadeIn(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    {article.images?.map((image, index) => (
                      <S.ImageWrapper
                        key={`${image?.image?.imagem?.url}-${index}A`}>
                        <S.Image
                          $gridtype="multi"
                          src={image?.image?.imagem?.url}
                          loading="lazy"
                          alt={image.image.description}
                        />
                      </S.ImageWrapper>
                    ))}
                  </S.ImagesWrapper>
                  <S.ImagesWrapper
                    variants={fadeIn(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    {articleEven &&
                      articleEven.images?.map((image, index) => (
                        <S.ImageWrapper
                          key={`${image?.image?.imagem?.url}-${index + 1}B`}>
                          <S.Image
                            $gridtype="multi"
                            src={image?.image?.imagem?.url}
                            loading="lazy"
                            alt={image?.image?.description}
                          />
                        </S.ImageWrapper>
                      ))}
                  </S.ImagesWrapper>
                </S.GridMultiArticles>
              </Container>
              <Container>
                <S.GridMultiArticles>
                  <S.TextWrapper
                    variants={fadeIn(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    $gridtype="multi"
                    $hasGap={hasGap(article.conclusion)}>
                    {article.conclusion?.map((text, index) => (
                      <S.Text key={`${text}-${index}A`}>
                        <RichTextEditor item={text} />
                      </S.Text>
                    ))}
                  </S.TextWrapper>
                  {articleEven && (
                    <S.TextWrapper
                      variants={fadeIn(0.4)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      $gridtype="multi"
                      $hasGap={hasGap(articleEven.conclusion)}>
                      {articleEven.conclusion?.map((text, index) => (
                        <S.Text key={`${text}-${index + 1}B`}>
                          <RichTextEditor item={text} />
                        </S.Text>
                      ))}
                    </S.TextWrapper>
                  )}
                </S.GridMultiArticles>
              </Container>
            </S.WrapperMultiArticles>
          )
        }
        return null
      })}
    </S.Wrapper>
  )
}
