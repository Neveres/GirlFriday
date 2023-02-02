import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

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
      }

      .following {
        width: 76px;
        height: 28px;
        top: 8px;
        right: 1px;
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
