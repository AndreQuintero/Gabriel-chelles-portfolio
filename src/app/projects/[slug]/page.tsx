import { hygraph } from '@/app/graphql/client'
import { CASE, PROJECTS } from '@/app/graphql/queries'
import { CaseProps, ProjectsProps } from '@/app/graphql/types'
import { Articles, ArticlesProps } from '@/app/templates/project/articles'
import { Banner } from '@/app/templates/project/banner'
import { Goals } from '@/app/templates/project/goals'
import { Hero } from '@/app/templates/project/hero'
import { NextPageSession as NextPage } from '@/app/templates/project/next-page'
import { Summary } from '@/app/templates/project/summary'

export async function generateStaticParams() {
  const data: ProjectsProps = await hygraph.request(PROJECTS)
  return data?.projects?.map((project) => ({
    slug: project.slug
  }))
}

const getCaseBySlug = async (slug: string) => {
  const data: CaseProps = await hygraph.request(CASE, { slug })
  return data.cases[0]
}

export default async function Projects({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const data = await getCaseBySlug(slug)

  return (
    <main>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        linkTitle={data.linkTitle}
        link={data.link}
      />
      <Banner url={data.banner.imagem.url} />
      <Summary
        description={data.description}
        myRole={data.myRole}
        projectYear={data.projectYear}
      />
      <Goals goals={data.goals} results={data.results} />
      <Articles sectionArticles={data.sectionArticles} />
      <NextPage
        color={data?.nextPage?.color.hex}
        title={data.nextPage.project.title}
        slug={data.nextPage.project.slug}
        text={data.nextPage.textColor}
        image={data.nextPage.image}
      />
    </main>
  )
}
