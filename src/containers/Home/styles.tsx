import { css, SerializedStyles } from '@emotion/react'
import { colors, fontSize, fontWeight } from 'src/GlobalCss'

export const homeContainer: { [index: string]: SerializedStyles } = {
  desktop: css`
    box-sizing: border-box;
    height: 900px;
    padding: 54px 0 0 210px;

    .search-container {
      padding-bottom: 28px;
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .search-header {
        margin-bottom: 21px;
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        color: ${colors.textWhite};
      }
    }

    .page-size-container {
      padding-bottom: 32.5px;
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
      top: 773px;
    }
  `,
  mobile: css`
    width: 375px;
    margin: 76.5px 0 0 20px;

    .search-container {
      padding-bottom: 20px;
      margin-bottom: 7px;

      .search-header {
        margin: -6px 0 17px 0;
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        color: ${colors.textWhite};
      }
    }

    .page-size-container {
      padding-bottom: 213px;

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

    .mobile-divider {
      box-sizing: border-box;
      width: 335px;
      height: 1px;
      margin: 0;
      border: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .MuiButtonBase-root {
      margin-top: 80px;
    }
  `,
}
