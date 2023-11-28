'use client'
import styled, { css } from 'styled-components'

export const Text = styled.h1`
  ${({ theme }) => css`
    font-size: 3.4rem;
    color: ${theme.colors?.secondary};
  `}
`
