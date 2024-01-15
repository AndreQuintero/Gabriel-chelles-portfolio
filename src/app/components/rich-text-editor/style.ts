import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
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
