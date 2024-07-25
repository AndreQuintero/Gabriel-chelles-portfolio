import { gql } from 'graphql-request'

const limit = process.env.LIMIT_PER_ROW

export const HOME = gql`
  query home {
    homes {
      greeting
      name
      introductionStart
      highlight {
        link
        text
      }
      highlightColor {
        hex
      }
      introductionEnd
      videoLink
      contact {
        greeting
        email
        resumeText
        resumeDownloadText
        resume {
          url
        }
        linkedin {
          link
          text
        }
        emailHover {
          hex
        }
      }
      projects(last: ${limit}) {
        id
        slug
        title
        imagesThumb {
          description
          imagem {
            url
          }
        }
      }
    }
  }
`
export const PROJECTS = gql`
  query Projects {
    projects(last: ${limit}, orderBy: publishedAt_DESC) {
      id
      slug
      title
      imagesThumb {
        description
        imagem {
          url
        }
      }
      updatedAt
    }
  }
`

export const CASE = gql`
  query CaseByProjectSlug($slug: String!) {
    cases(first: 1, where: { project: { slug: $slug } }) {
      id
      title
      subtitle
      linkTitle
      link {
        link
        text
      }
      banner {
        description
        imagem {
          url
        }
      }
      description
      myRole
      projectYear
      goals
      results {
        html
      }
      sectionArticles(last: ${limit}) {
        sectionType
        articles(last: ${limit}) {
          title
          introduction{
            html
          }
          items{
            html
          }
          conclusion{
            html
          }
          images {
            fullWidth
            image {
              description
              imagem {
                url
              }
            }
          }
          showcases {
            image {
              description
              imagem {
                url
              }
            }
          }
        }
      }
      nextPage {
        project {
          slug
          title
        }
        color {
          hex
        }
        textColor
        image {
          description
          imagem {
            url
          }
        }
      }
    }
  }
`

export const FOOTER = gql`
  query footer {
    footers {
      title
      subtitle
      companies(last: ${limit}) {
        description
        imagem {
          url
        }
      }
      contact {
        greeting
        email
        resumeText
        resumeDownloadText
        resume {
          url
        }
        linkedin {
          link
          text
        }
        emailHover {
          hex
        }
      }
    }
  }
`

export const NOT_FOUND = gql`
  query notFound {
    notFounds {
      title
      text
      projects(last: ${limit}) {
        slug
        title
        imagesThumb {
          description
          imagem {
            url
          }
        }
      }
    }
  }
`

export const ABOUT = gql`
  query About {
    abouts {
      title
      description
      tags
      picture {
        description
        imagem {
          url
        }
      }
    }
  }
`

export const METATAGS = gql`
  query metatags {
    metatags {
      abstract
      title
      description
      keywords
      applicationName
      appleWebAppTitle
      appleWebAppStatusBarStyle
      appleWebAppStartupImage {
        url
      }
      authorName
      authorUrl
      creator
      category
      publisher
      openGraphType
      openGraphDescription
      openGraphSiteName
      openGraphTitle
      openGraphCountryName
      openGraphEmails
      openGraphImage {
        url
      }
      maskIconColor
      maskIcon {
        url
      }
      generator
      icons {
        sizes
        type
        icon {
          url
        }
      }
      viewportColor {
        hex
      }
    }
  }
`
