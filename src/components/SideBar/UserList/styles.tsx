import { css } from '@emotion/react'
import { colors, fontFamily, fontSize, fontWeight } from 'src/GlobalCss'

export const userListContainer = css`
  width: 343px;
  padding: 32px 11px 0 16px;
  background-color: ${colors.bgSecondary};

  .user-container {
    display: flex;
    width: 100%;
    height: 45px;
    margin-bottom: 16px;

    .user-avater,
    img {
      box-sizing: border-box;
      display: inline-block;
      width: 40px;
      height: 40px;
      border: 1px solid #f8f8f8;
      border-radius: 5px;
      margin: 3px 15px 2px 0px;
    }

    .user-info-container {
      position: relative;
      width: 100%;

      .user-name-container {
        display: inline-block;
        width: 200px;
        font-weight: ${fontWeight.lighter};

        .user-name {
          font-size: ${fontSize.xLarge};
          line-height: 150%;
          letter-spacing: 0.15px;
        }

        .user-username {
          font-size: ${fontSize.large};
          line-height: 150%;
          letter-spacing: 0.25px;
          opacity: 0.5;
        }
      }

      .user-status {
        position: absolute;
        box-sizing: border-box;
        border: 1px solid ${colors.textWhite};
        border-radius: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.3px;
        font-size: ${fontSize.small};

        .user-status-following {
          width: 56px;
          font-family: ${fontFamily.openSans};
          font-weight: ${fontWeight.bold};
          line-height: 100%;
          color: ${colors.textBlack};
        }

        .user-status-unfollow {
          width: 40px;
          font-family: ${fontFamily.openSans};
          font-weight: ${fontWeight.lighter};
          line-height: 100%;
          margin-left: 1px;
        }
      }

      .following {
        width: 76px;
        height: 28px;
        top: 8px;
        right: 1px;
        background: ${colors.textWhite};
      }

      .unfollow {
        width: 60px;
        height: 29px;
        top: 8px;
        right: 0;
      }
    }
  }
`
