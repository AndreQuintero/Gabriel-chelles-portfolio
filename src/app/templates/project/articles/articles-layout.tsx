import { Article, MultiArticles } from '@/app/components/article'
import { ArticleSection } from './articles'
import { useViewDetect } from '@/app/hooks'

type SingleArticlesProps = Pick<ArticleSection, 'articles'>
export const SingleArticlesSection = ({ articles }: SingleArticlesProps) => {
  return (
    <>
      {articles.map((article, index) => (
        <Article
          key={`single-article-${article.title}-${index}`}
          {...article}
        />
      ))}
    </>
  )
}

export const MultiArticlesSection = ({ articles }: SingleArticlesProps) => {
  const { isMobile } = useViewDetect()
  return isMobile ? (
    <SingleArticlesSection articles={articles} />
  ) : (
    <MultiArticles articles={articles} />
  )
}
