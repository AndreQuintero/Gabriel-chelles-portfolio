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
