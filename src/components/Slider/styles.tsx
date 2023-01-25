import { css } from '@emotion/react'

export const sliderContainer = {
  desktop: css`
    .MuiSlider-root {
      span:nth-child(4) {
        left: 0.75% !important;
      }

      span:nth-child(14) {
        left: 99.25% !important;
      }
    }
  `,
  mobile: css``,
}
