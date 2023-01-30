import { css, SerializedStyles } from '@emotion/react'

export const sliderContainer: { [index: string]: SerializedStyles } = {
  desktop: css`
    .MuiSlider-root {
      span:nth-of-type(4) {
        left: 0.5% !important;
      }

      span:nth-of-type(14) {
        left: 99.5% !important;
      }
    }
  `,
  mobile: css`
    margin-left: -3px;

    .MuiSlider-root {
      span:nth-of-type(4) {
        left: 2% !important;
      }

      span:nth-of-type(14) {
        left: 96.5% !important;
      }
    }
  `,
}
