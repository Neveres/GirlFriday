import { css } from '@emotion/react'
import { colors, fontWeight } from 'src/GlobalCss'

export const searchResultContainer = css`
  width: 809px;
  margin-left: 160px;
  margin-top: 40px;

  .search-result-header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    svg {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }

    span {
      font-weight: ${fontWeight.lighter};
      font-size: 30px;
      line-height: 150%;
      letter-spacing: 0.25px;
    }
  }

  .search-result-content {
    margin-left: 50px;
    .search-result-item {
      display: inline-block;
      margin-right: 34px;
      margin-bottom: 35px;

      img {
        width: 219px;
        height: 146px;
        margin-bottom: 5px;
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
`
