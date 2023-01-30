import { css, SerializedStyles } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const homeContainer: { [index: string]: SerializedStyles } = {
  desktop: css`
    height: 900px;
    margin: 55px 0 0 210px;

    .search-container {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 27px;
      margin-bottom: 31px;

      .search-header {
        margin-bottom: 21px;
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
      padding-bottom: 31px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .page-size-title {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        margin-bottom: 9px;
      }

      .page-size-status {
        position: relative;
        margin-bottom: 4px;

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

    .MuiButtonBase-root {
      position: absolute;
      left: 210px;
      top: 774px;
    }
  `,
  mobile: css`
    margin: 76px 0 0 20px;

    .search-container {
      padding-bottom: 20px;
      margin-bottom: 7px;

      .search-header {
        margin: -6px 0 18px 0;
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        color: ${colors.textWhite};
      }
    }

    .page-size-container {
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      .page-size-title {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        margin-bottom: 5px;
      }

      .page-size-status {
        position: relative;
        margin-bottom: -3px;

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

    .MuiButtonBase-root {
      position: absolute;
      bottom: 150px;
    }
  `,
}
