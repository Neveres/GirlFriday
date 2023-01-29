import { css, SerializedStyles } from '@emotion/react'
import { colors, fontWeight, fontSize } from 'src/GlobalCss'

export const searchResultContainer: { [index: string]: SerializedStyles } = {
  desktop: css`
    width: 809px;
    margin-left: 153px;
    margin-top: 90px;

    .search-result-header {
      display: flex;
      align-items: center;
      margin-left: 1px;
      margin-bottom: 25px;

      svg {
        width: 43px;
        height: 43px;
        margin-right: 16px;
        cursor: pointer;
      }

      span {
        font-weight: ${fontWeight.lighter};
        font-size: 30px;
        line-height: 150%;
        letter-spacing: 0.25px;
      }
    }

    .search-result-content {
      margin-left: 53px;
      .search-result-item {
        display: inline-block;
        margin-right: 34px;
        margin-bottom: 35px;

        img {
          width: 219px;
          height: 146px;
          margin-bottom: 7px;
        }

        .search-result-item-name {
          font-weight: ${fontWeight.lighter};
          font-size: 14.9px;
          line-height: 150%;
          letter-spacing: 0.139688px;
        }

        .search-result-item-username {
          font-weight: ${fontWeight.lighter};
          font-size: 11.175px;
          line-height: 150%;
          letter-spacing: 0.3725px;
          color: ${colors.textGray};
        }
      }
    }
  `,
  mobile: css`
    width: 100%;
    height: 100%;
    margin-left: 20px;

    .search-result-header {
      margin-bottom: 24px;

      .search-result-main-header {
        position: relative;
        width: 375px;
        height: 70px;
        margin-bottom: 20px;

        svg {
          position: absolute;
          top: 15px;
          left: -10px;
          width: 43px;
          height: 43px;
          cursor: pointer;
        }

        span {
          position: absolute;
          top: 17px;
          left: 38px;
          font-weight: ${fontWeight.lighter};
          font-size: ${fontSize.xxLarge};
          line-height: 150%;
        }
      }

      .search-result-sub-header {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
      }
    }

    .search-result-content {
      width: 100%;
      .search-result-item {
        display: inline-block;
        margin-right: 34px;
        margin-bottom: 38px;

        img {
          width: 335px;
          height: 222.67px;
          margin-bottom: 17.33px;
        }

        .search-result-item-name {
          font-weight: ${fontWeight.lighter};
          font-size: 14.9px;
          line-height: 150%;
          letter-spacing: 0.139688px;
        }

        .search-result-item-username {
          font-weight: ${fontWeight.lighter};
          font-size: 11.175px;
          line-height: 150%;
          letter-spacing: 0.3725px;
          color: ${colors.textGray};
        }
      }
    }
  `,
}
