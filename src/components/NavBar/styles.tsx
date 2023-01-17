import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const navBarContainer = css`
  position: fixed;
  display: inline-block;
  width: 80px;
  height: 100vh;
  left: 0px;
  top: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  .navBar-logo-container {
    width: 80px;
    height: 88px;
    left: 0px;
    top: 0px;

    .navBar-logo {
      position: absolute;
      width: 35px;
      height: 15px;
      left: 23px;
      top: 37px;
      font-weight: ${fontWeight.bolder};
      font-size: ${fontSize.normal};
      line-height: 15px;
      letter-spacing: -0.05em;
      background: linear-gradient(270deg, #ffd25f 0.13%, #ff5c01 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .navBar-items {
    .navBar-item {
      text-align: center;
      width: 34px;
      height: 50px;
      margin: auto;
      margin-bottom: 10px;
      font-weight: ${fontWeight.lighter};
      font-size: ${fontSize.small};
      line-height: 150%;
      letter-spacing: 0.4px;
      a {
        color: ${colors.textWhite};
        text-decoration: none;
      }
    }
  }
`
