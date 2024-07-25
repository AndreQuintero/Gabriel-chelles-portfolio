import { ArticleProps, ImageArticleProps } from '../components/article'
import { ArticleGridType } from '../templates/project/articles'

export type HomeData = {
  greeting: string
  name: string
  introductionStart: string
  highlight: LinkData
  highlightColor: ColorData
  introductionEnd: string
  videoLink: string
  contact: ContactProps
  projects: Array<ProjectData>
}

export type ContactProps = {
  greeting?: string
  email?: string
  resumeText: string
  resumeDownloadText: string
  resume: {
    url: string
  }
  linkedin: LinkData
  emailHover?: ColorData
}

export type HomeProps = {
  homes: Array<HomeData>
}

export type ProjectData = {
  id: string
  slug: string
  title: string
  imagesThumb: Array<ImageData>
  updatedAt?: string
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
  results: Array<RichTextEditorData>
  sectionArticles: Array<SectionArticleData>
  nextPage: {
    project: ProjectData
    color: ColorData
    textColor: 'light' | 'dark'
    image: ImageData
  }
}

type SectionArticleData = {
  sectionType: ArticleGridType
  articles: Array<ArticleProps>
}

export type FooterProps = {
  footers: Array<FooterData>
}

export type FooterData = {
  title: string
  subtitle: string
  companies: Array<ImageData>
  contact: ContactProps
}

export type NotFoundProps = {
  notFounds: Array<NotFoundData>
}

export type NotFoundData = {
  title?: string
  text?: string
  projects: Array<ProjectData>
}

export type AboutProps = {
  abouts: Array<AboutData>
}

export type AboutData = {
  title?: string
  description?: Array<string>
  tags?: Array<string>
  picture?: ImageData
}

export type MetatagProps = {
  metatags: Array<MetatagData>
}

export type MetatagData = {
  abstract: string
  title: string
  description: string
  keywords: Array<string>
  applicationName: string
  appleWebAppTitle: string
  appleWebAppStatusBarStyle:
    | 'default'
    | 'black'
    | 'black-translucent'
    | undefined
  appleWebAppStartupImage: {
    url: string
  }
  authorName: string
  authorUrl: string
  creator: string
  category: string
  publisher: string
  openGraphType:
    | 'website'
    | 'article'
    | 'book'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
    | undefined
  openGraphDescription: string
  openGraphSiteName: string
  openGraphTitle: string
  openGraphCountryName: string
  openGraphEmails: Array<string>
  openGraphImage: {
    url: string
  }
  maskIconColor: string
  maskIcon: {
    url: string
  }
  generator: string
  icons: Array<IconData>
  viewportColor: ColorData
}

export type IconData = {
  sizes: string
  type: string
  icon: {
    url: string
  }
}

export type RichTextEditorData = {
  html: string
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

export type ColorData = {
  hex: string
}
