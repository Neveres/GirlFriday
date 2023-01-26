import { css } from '@emotion/react'

export const sliderContainer = {
  desktop: css`
    .MuiSlider-root {
      span:nth-of-type(4) {
        left: 0.75% !important;
      }

      span:nth-of-type(14) {
        left: 99.25% !important;
      }
    }
  `,
  mobile: css`
    margin-left: -3px;
  `,
}
