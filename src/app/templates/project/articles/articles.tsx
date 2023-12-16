'use client'

import * as S from './style'
import { ArticleProps } from '@/app/components/article'
import { Container } from '@/app/components/container'
import { MultiArticlesSection, SingleArticlesSection } from './articles-layout'

export type ArticlesProps = {
  sectionArticles: Array<ArticleSection>
}

export type ArticleSection = {
  sectionType: ArticleGridType
  articles: Array<ArticleProps>
}
export type ArticleGridType = 'single' | 'multi'

export const Articles = ({ sectionArticles }: ArticlesProps) => {
  return (
    <S.Wrapper>
      {sectionArticles.map((section, index) => (
        <Container key={`article-section-${index}`} ignorePaddingOnMobile>
          {section.sectionType === 'single' ? (
            <SingleArticlesSection articles={section.articles} />
          ) : (
            <MultiArticlesSection
              key={`multi-articles-section-${index}`}
              articles={section.articles}
            />
          )}
        </Container>
      ))}
    </S.Wrapper>
  )
}
