import Markdown from 'react-markdown'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Markdown)`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.secondary};
      text-decoration-line: underline;
      &:hover {
        color: #308cf4;
      }
    }
  `}
`
