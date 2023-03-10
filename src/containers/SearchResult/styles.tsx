import { css, SerializedStyles } from '@emotion/react'
import { colors, fontWeight } from 'src/GlobalCss'

export const searchResultContainer: { [index: string]: SerializedStyles } = {
  desktop: css`
    width: 812px;
    margin: 93px 0 0 157px;

    .search-result-header {
      display: flex;
      align-items: center;
      margin-left: 1px;
      margin-bottom: 23px;

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

      .search-result-row:nth-of-type(2n) {
        margin-bottom: 18px;
      }

      .search-result-item {
        display: inline-block;
        margin: 0 34px 31px 0;

        img {
          width: 219px;
          height: 146px;
          margin-bottom: 9px;
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

    .MuiButtonBase-root {
      margin: 7px 0 0 53px;
    }
  `,
  mobile: css`
    width: 100%;
    margin-left: 20px;

    .search-result-content {
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

      .search-result-item:nth-of-type(1) {
        margin-bottom: 39px;
      }
    }
  `,
}
