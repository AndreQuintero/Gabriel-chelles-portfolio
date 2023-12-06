import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div<{
  $ignorePaddingOnMobile: boolean
  $ignoreRightPadding: boolean
}>`
  ${({ $ignorePaddingOnMobile, $ignoreRightPadding }) => css`
    max-width: 1314px;
    margin-left: auto;
    margin-right: auto;
    ${media.lessThan('large')`
      padding: 0 ${$ignorePaddingOnMobile ? '0' : '1.6rem'};
      ${$ignoreRightPadding && 'padding-right: 0;'}
    `}
  `}
`
