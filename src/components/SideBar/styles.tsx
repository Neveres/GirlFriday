import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const sideBarContainer = css`
  position: fixed;
  display: inline-block;
  width: 375px;
  height: 100vh;
  right: 0px;
  top: 0px;
  background-color: ${colors.bgSecondary};
`
