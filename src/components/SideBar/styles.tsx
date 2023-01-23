import { css } from '@emotion/react'
import { colors } from 'src/GlobalCss'

export const sideBarContainer = css`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 375px;
  height: 100%;
  padding-top: 25px;
  background-color: ${colors.bgSecondary};
  overflow: hidden;
`
