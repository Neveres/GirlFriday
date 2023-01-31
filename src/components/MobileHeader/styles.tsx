import { css } from '@emotion/react'
import { fontSize, fontWeight } from 'src/GlobalCss'

export const mobilePageHeader = css`
  position: relative;
  width: 375px;
  height: 70px;
  margin-bottom: 20px;

  svg {
    position: absolute;
    top: 15px;
    left: -9px;
    width: 42.5px;
    height: 42.5px;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 17px;
    left: 38px;
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.xxLarge};
    line-height: 150%;
  }
`
