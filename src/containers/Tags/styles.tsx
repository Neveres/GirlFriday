import { css, SerializedStyles } from '@emotion/react'
import { colors, fontWeight, fontSize } from 'src/GlobalCss'

export const tagsContainer: { [index: string]: SerializedStyles } = {
  desktop: css`
    width: 875px;
    margin: 82px 0 0 336px;

    .page-title {
      font-weight: ${fontWeight.lighter};
      font-size: 30px;
      line-height: 150%;
      margin: 79px 0 23px 0;
    }

    .tag-container {
      display: inline-block;
      width: 150px;
      height: 199px;
      margin: 0 25px 37px 0;

      .tag-big-title {
        position: relative;
        width: 150px;
        height: 150px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 10px;
        margin-bottom: 7px;

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
          top: 87px;

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
  `,
  mobile: css`
    width: 100%;
    margin-left: 20px;

    .tag-container {
      width: 150px;
      height: 199px;
      display: inline-block;
      margin-left: 5px;
      margin-right: 19px;
      margin-bottom: 24px;

      .tag-big-title {
        position: relative;
        width: 150px;
        height: 150px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 10px;
        margin-bottom: 7px;

        .tag-big-title-name {
          box-sizing: border-box;
          flex-direction: row;
          align-items: flex-start;
          padding: 8px 14px 7px 10px;

          gap: 10px;

          position: absolute;
          max-width: 135px;
          height: 50px;
          left: 10px;
          top: 86px;
          font-size: ${fontSize.xxLarge};
          border: 4px solid #ffffff;
          border-radius: 8px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      .tag-sub-title {
        position: relative;
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
          position: absolute;
          top: 20px;
          font-size: 11.175px;
          letter-spacing: 0.3725px;
          color: ${colors.textGray};
        }
      }
    }
  `,
}
