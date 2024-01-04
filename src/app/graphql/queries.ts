import { gql } from 'graphql-request'

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
        linkedinButton {
          link
          text
        }
        resume {
          url
        }
      }
    }
  }
`
export const PROJECTS_FIRST_FOUR = gql`
  query Projects {
    projects(first: 4) {
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
