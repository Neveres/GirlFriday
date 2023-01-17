import { css } from '@emotion/react'
import { colors, fontWeight } from 'src/GlobalCss'

export const tagsContainer = css`
  width: 846px;

  .tag-container {
    width: 150px;
    height: 199px;
    display: inline-block;

    .tag-big-title {
      position: relative;
      width: 150px;
      height: 150px;
      /* background: #ffffff; */
      /* opacity: 0.06; */
      border-radius: 10px;

      .tag-big-title-name {
        box-sizing: border-box;
        flex-direction: row;
        align-items: flex-start;
        padding: 7px 14px;
        gap: 10px;

        position: absolute;
        max-width: 129px;
        height: 50px;
        left: 10px;
        top: 86px;

        border: 4px solid #ffffff;
        border-radius: 8px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .tag-sub-title {
      width: 143px;
      font-weight: ${fontWeight.lighter};
      line-height: 150%;

      .tag-sub-title-name {
        height: 22px;
        font-size: 14.9px;
        letter-spacing: 0.139688px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .tag-sub-title-count {
        font-size: 11.175px;
        letter-spacing: 0.3725px;
        color: ${colors.textGray};
      }
    }
  }
`
