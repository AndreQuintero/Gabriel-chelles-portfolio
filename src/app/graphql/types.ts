import { ArticleProps, ImageArticleProps } from '../components/article'
import { ArticleGridType } from '../templates/project/articles'

export type HomeData = {
  greeting: string
  name: string
  introductionStart: string
  highlight: string
  introductionEnd: string
  videoLink: string
  contact: {
    greeting: string
    email: string
    linkedinButton: LinkData
    resume: {
      url: string
    }
  }
  projects: Array<ProjectData>
}

export type HomeProps = {
  homes: Array<HomeData>
}

export type ProjectData = {
  id: string
  slug: string
  title: string
  imagesThumb: Array<ImageData>
}

export type ProjectsProps = {
  projects: Array<ProjectData>
}

export type CaseProps = {
  cases: Array<CaseData>
}

export type CaseData = {
  id: string
  title: string
  subtitle: string
  linkTitle: string
  link: LinkData
  banner: ImageData
  description: string
  myRole: string
  projectYear: string
  goals: Array<string>
  results: Array<string>
  sectionArticles: Array<SectionArticleData>
  nextPage: {
    project: ProjectData
    color: {
      hex: string
    }
    textColor: 'light' | 'dark'
    image: ImageData
  }
}

type SectionArticleData = {
  sectionType: ArticleGridType
  articles: Array<ArticleProps>
}

export type ImageArticleData = Pick<ImageArticleProps, 'fullWidth'> & {
  image: ImageData
}

export type ImageData = {
  description: string
  imagem: {
    url: string
  }
}

export type LinkData = {
  link: string
  text: string
}
