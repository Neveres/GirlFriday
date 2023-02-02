import { css } from '@emotion/react'
import { colors, fontFamily, fontSize, fontWeight } from 'src/GlobalCss'

export const buttonContainer = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  background: ${colors.textWhite};
  border: 1px solid ${colors.textWhite};
  border-radius: 20px;

  .button-text {
    font-family: ${fontFamily.openSans};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.small};
    line-height: 100%;
    text-align: center;
    text-transform: capitalize;
    color: ${colors.textBlack};
    flex: none;
    order: 0;
    flex-grow: 0;
    letter-spacing: 0.3px;
  }

  :hover {
    background: ${colors.textBlack};

    .button-text {
      color: ${colors.textWhite};
    }
  }
`
