import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const userListContainer = css`
  width: 343px;
  padding: 33px 11px 0 12px;
  background-color: ${colors.bgSecondary};

  .user-container {
    display: flex;
    width: 100%;
    height: 45px;
    margin-bottom: 17px;

    .user-avater,
    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      border: 1px solid #f8f8f8;
      border-radius: 5px;
      margin: 3px 14px 2px 0px;
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
        top: 8px;
        right: -9px;
        border: 1px solid #ffffff;
        border-radius: 20px;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 28px;

        .user-status-follow {
          width: 56px;
          font-size: ${fontSize.small};
          font-weight: ${fontWeight.bold};
          line-height: 100%;
          color: #121212;
        }

        .user-status-not-follow {
          width: 40px;
          font-size: ${fontSize.small};
          font-weight: ${fontWeight.lighter};
          line-height: 100%;
        }
      }

      .follow {
        width: 76px;
        height: 28px;
        background: ${colors.textWhite};
      }

      .not-follow {
        width: 60px;
        height: 28px;
      }
    }
  }
`
