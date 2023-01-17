import { css } from '@emotion/react'
import { fontSize, fontWeight } from 'src/GlobalCss'

export const textFieldContainer = css`
  width: 335px;
  height: 58px;
  box-sizing: border-box;
  margin-bottom: 9px;

  .MuiInputBase-root {
    height: 58px;

    input {
      position: absolute;
      top: 15px;
      height: 24px;
      padding: 0 0 0 12px;
      font-size: ${fontSize.large};
      font-weight: ${fontWeight.lighter};
      line-height: 24px;
      letter-spacing: 0.15px;
    }
  }
`