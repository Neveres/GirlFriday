import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        font-family: ${fontFamily.ubuntu};
        font-style: normal;
        color: ${colors.textWhite};
      }

      body {
        margin: 0;
        background-color: ${colors.bgPrimary};
      }

      #root {
        min-height: 100vh;
        position: relative;
      }

      .mobile-page-title {
        font-weight: ${fontWeight.lighter};
        font-size: ${fontSize.xxLarge};
        line-height: 150%;
        margin-bottom: 24px;
      }
    `}
  />
)

export const fontSize = {
  xxxLarge: '48px',
  xxLarge: '24px',
  xLarge: '16px',
  large: '14px',
  medium: '13px',
  small: '12px',
  xSmall: '11px',
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
  bgSecondary: '#1B1B1B',
  textWhite: '#ffffff',
  textGray: '#b2b2b2',
}
