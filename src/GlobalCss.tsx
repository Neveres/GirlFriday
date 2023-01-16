import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        font-family: ${fontFamily.ubuntu};
      }

      body {
        margin: 0;
      }

      #root {
        min-height: 100vh;
        background-color: ${colors.bgPrimary};
      }
    `}
  />
)

export const fontFamily = {
  ubuntu: 'Ubuntu',
}

export const colors = {
  bgPrimary: '#181818',
}
