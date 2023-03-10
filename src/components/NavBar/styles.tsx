import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'
import bot_nav_bg from 'src/assets/bot_nav_bg.png'

export const navBarContainer = css`
  position: absolute;
  width: 80px;
  height: 100%;
  left: 0px;
  top: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${colors.bgSecondary};

  .navBar-logo-container {
    width: 100%;
    height: 88px;
    left: 0px;
    top: 0px;
    margin-bottom: 9.5px;

    .navBar-logo {
      position: absolute;
      /* width: 35px; */
      height: 15px;
      left: 23px;
      top: 37px;
      font-weight: ${fontWeight.bolder};
      font-size: ${fontSize.medium};
      line-height: 15px;
      /* letter-spacing: -0.05em; */
      background: ${colors.logo};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .navBar-items {
    margin-left: 2px;

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
        text-decoration: none;
        img {
          margin-bottom: -4px;
        }
      }
    }

    .tags {
      position: relative;
      a {
        img {
          margin-bottom: -3px;
        }
      }

      .dot {
        position: absolute;
        top: -4px;
        right: 2px;
        box-sizing: border-box;
        height: 4.5px;
        width: 4.5px;
        background-color: #00d1ff;
        border-radius: 50%;
      }
    }

    .focused {
      margin-bottom: 13px;
    }
  }
`

export const navBarHeaderContainer = css`
  position: absolute;
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
    /* letter-spacing: -0.05em; */
    background: ${colors.logo};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const navBarFooterContainer = css`
  position: absolute;
  width: 100%;
  height: 66px;
  bottom: 0;
  left: 0;
  background: rgba(24, 24, 24, 0.2);
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(27.1828px);
  background-image: url(${bot_nav_bg});

  .navBar-items {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .navBar-item {
      margin: 4px 27px 0 27px;
    }
  }
`
