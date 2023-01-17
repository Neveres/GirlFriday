import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const homeContainer = css`
  margin-left: 210px;

  .search-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 20px;
    margin-bottom: 30px;

    .search-container-title {
      margin: 50px 0 25px 0;
      font-weight: ${fontWeight.lighter};
      font-size: ${fontSize.extraLarge};
      line-height: 150%;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color: ${colors.textWhite};
    }
  }

  .page-size-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .page-size-container-title {
      font-weight: ${fontWeight.lighter};
      font-size: ${fontSize.extraLarge};
      line-height: 150%;
      margin-bottom: 10px;
    }

    .page-size-container-count {
      font-weight: ${fontWeight.bolder};
      font-size: 48px;
      line-height: 150%;
    }

    .page-size-container-unit {
      font-weight: ${fontWeight.lighter};
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.15px;
    }
  }
`
