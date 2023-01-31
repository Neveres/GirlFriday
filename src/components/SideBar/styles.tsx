import { css } from '@emotion/react'
import { colors } from 'src/GlobalCss'

export const sideBarContainer = css`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 375px;
  height: 118%;
  padding-top: 17px;
  background-color: ${colors.bgSecondary};
  overflow: hidden;

  .MuiButtonBase-root {
    padding-bottom: 5px;
  }

  .MuiButtonBase-root:nth-of-type(2) {
    padding-left: 14px;
  }
`
