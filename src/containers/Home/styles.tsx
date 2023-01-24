import { css } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const homeContainer = {
  desktop: css`
    margin-left: 205px;

    .search-container {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 27px;
      margin-bottom: 30px;

      .search-header {
        margin: 52px 0 22px 0;
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        color: ${colors.textWhite};
      }
    }

    .page-size-container {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .page-size-title {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        margin-bottom: 9px;
      }

      .page-size-status {
        position: relative;
        margin-bottom: 3px;

        .page-size-status-count {
          font-weight: ${fontWeight.bolder};
          font-size: ${fontSize.xxxLarge};
          line-height: 150%;
        }

        .page-size-status-unit {
          position: absolute;
          bottom: 15px;
          left: 65px;
          font-weight: ${fontWeight.lighter};
          font-size: ${fontSize.xLarge};
          line-height: 150%;
          letter-spacing: 0.15px;
        }
      }
    }
  `,
  mobile: css`
    margin: 70px 0 0 20px;

    .search-container {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 20px;
      margin-bottom: 30px;

      .search-container-title {
        margin: 50px 0 25px 0;
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        color: ${colors.textWhite};
      }
    }

    .page-size-container {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .page-size-container-title {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        margin-bottom: 10px;
      }

      .page-size-container-count {
        font-weight: ${fontWeight.bolder};
        font-size: ${fontSize.xxxLarge};
        line-height: 150%;
      }

      .page-size-container-unit {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xLarge};
        line-height: 150%;
        letter-spacing: 0.15px;
      }
    }

    .MuiButtonBase-root {
      /* position: absolute;
      bottom: 80px; */
    }
  `,
}
