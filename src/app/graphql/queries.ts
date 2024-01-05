import { gql } from 'graphql-request'

export const HOME = gql`
  query home {
    homes {
      greeting
      introductionStart
      highlight
      introductionEnd
      videoLink
      contact {
        greeting
        email
        linkedinButton {
          link
          text
        }
        resume {
          url
        }
      }
      projects {
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
    projects {
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
      sectionArticles {
        sectionType
        articles {
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
