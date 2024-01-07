import { gql } from 'graphql-request'

const limit = process.env.LIMIT_PER_ROW

export const HOME = gql`
  query home {
    homes {
      greeting
      name
      introductionStart
      highlight
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
      results
      sectionArticles(last: ${limit}) {
        sectionType
        articles(last: ${limit}) {
          title
          introduction
          items
          conclusion
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
      }
    }
  }
`
