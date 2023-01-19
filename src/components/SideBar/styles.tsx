import { css } from '@emotion/react'
import { colors } from 'src/GlobalCss'

export const sideBarContainer = css`
  position: absolute;
  height: auto;
  padding-top: 25px;
  width: 375px;
  right: 0px;
  top: 0px;
  background-color: ${colors.bgSecondary};
  overflow: auto;
`
