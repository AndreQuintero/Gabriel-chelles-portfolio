import styled, { css } from 'styled-components'

export const Cursor = styled.div`
  ${({ theme }) => css`
    width: 16rem;
    height: 16rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    z-index: 9;

    label {
      color: #252525;
      font-family: ${theme.fonts.style.secondary};
      font-size: 1.8rem;
      font-weight: 400;
    }
  `}
`

export const Wrapper = styled.div`
  display: contents;
  position: relative;
  cursor: none;
  ${Cursor} {
    opacity: 0;
  }

  &:hover {
    ${Cursor} {
      opacity: 1;
    }
  }
`
