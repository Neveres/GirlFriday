import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const homeContainer = css`
  .home-title {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.extraLarge};
    line-height: 150%;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: ${colors.textWhite};
  }
`
