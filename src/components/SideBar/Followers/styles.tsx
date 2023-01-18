import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const followersContainer = css`
  width: 343px;
  padding: 0 16px;
  margin-top: 31px;

  .follower-container {
    display: flex;
    width: 100%;
    height: 45px;
    margin-bottom: 16px;

    .follower-avater,
    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin: 3px 15px 2px 0;
    }

    .follower-info-container {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .follower-name-container {
        display: inline-block;
        width: 200px;
        font-weight: ${fontWeight.lighter};

        .follower-name {
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.15px;
        }

        .follower-username {
          font-size: ${fontSize.large};
          line-height: 150%;
          letter-spacing: 0.25px;
          opacity: 0.5;
        }
      }

      .follower-status {
        border: 1px solid #ffffff;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 28px;

        .follower-status-follow {
          width: 56px;
          font-size: 12px;
          font-weight: 600;
          line-height: 100%;
          color: #121212;
        }

        .follower-status-not-follow {
          width: 40px;
          font-size: 12px;
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
        height: 29px;
      }
    }
  }
`
