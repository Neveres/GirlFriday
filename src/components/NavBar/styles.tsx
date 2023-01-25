import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const navBarContainer = css`
  box-sizing: border-box;
  position: fixed;
  width: 80px;
  height: 100vh;
  left: 0px;
  top: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${colors.bgSecondary};

  .navBar-logo-container {
    width: 80px;
    height: 88px;
    left: 0px;
    top: 0px;
    margin-bottom: 7px;

    .navBar-logo {
      position: absolute;
      width: 35px;
      height: 15px;
      left: 18px;
      top: 34px;
      font-weight: ${fontWeight.bolder};
      font-size: ${fontSize.medium};
      line-height: 15px;
      letter-spacing: -0.05em;
      background: linear-gradient(270deg, #ffd25f 0.13%, #ff5c01 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .navBar-items {
    margin-left: -3px;
    .navBar-item {
      text-align: center;
      width: 34px;
      height: 50px;
      margin: auto;
      margin-bottom: 14px;
      font-weight: ${fontWeight.lighter};
      font-size: ${fontSize.small};
      line-height: 150%;
      letter-spacing: 0.4px;

      a {
        color: ${colors.textWhite};
        text-decoration: none;
        img {
          margin-bottom: -4px;
        }
      }
    }
  }
`

export const navBarHeaderContainer = css`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  background-color: ${colors.bgSecondary};

  .navBar-logo {
    position: absolute;
    left: 21px;
    top: 28px;
    font-weight: ${fontWeight.bolder};
    font-size: ${fontSize.medium};
    line-height: 15px;
    letter-spacing: -0.05em;
    background: linear-gradient(270deg, #ffd25f 0.13%, #ff5c01 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const navBarFooterContainer = css`
  position: fixed;
  width: 100%;
  height: 66px;
  bottom: 66px;
  left: 0;
  background-color: ${colors.bgSecondary};

  .navBar-items {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .navBar-item {
      margin-right: 40px;
    }
  }
`
