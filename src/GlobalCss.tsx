import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        font-family: ${fontFamily.ubuntu};
        font-style: normal;
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

export const fontSize = {
  extraLarge: '24px',
  large: '14px',
  normal: '13px',
  small: '12px',
}

export const fontWeight = {
  bolder: 700,
  bold: 600,
  lighter: 400,
}

export const fontFamily = {
  ubuntu: 'Ubuntu',
}

export const colors = {
  bgPrimary: '#181818',
  textWhite: '#ffffff',
}
