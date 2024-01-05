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
    linkedinButton: {
      link: string
      text: string
    }
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
  imagesThumb: Array<{
    description: string
    imagem: {
      url: string
    }
  }>
}

export type ProjectsProps = {
  projects: Array<ProjectData>
}
