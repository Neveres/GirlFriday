import { createTheme, Theme } from '@mui/material'
import { colors, fontSize, fontWeight, fontFamily } from 'src/GlobalCss'

const styleOverrides = {
  root: {
    width: '725px',
    '& .MuiSlider-markLabel': {
      top: '34px',
      color: colors.textWhite,
      fontFamily: fontFamily.ubuntu,
      fontWeight: 500,
      fontSize: '16px',
      opacity: 0.5,
      letterSpacing: '0.15px',
    },
    '& .MuiSlider-markLabelActive': {
      opacity: 1,
    },
    '& .MuiSlider-mark': {
      backgroundColor: 'initial',
    },
  },
  rail: {
    height: '8px',
  },
  track: {
    background: colors.logo,
    border: 0,
    height: '8px',
  },
  thumb: {
    width: '25px',
    height: '25px',
    background: '#1B1B1B',
    border: '6px solid #FFD05D',
  },
}

export const theme: { [index: string]: Theme } = {
  desktop: createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          ...styleOverrides,
          root: {
            ...styleOverrides.root,
            padding: '13px 0 !important',
          },
          rail: {
            ...styleOverrides.rail,
            left: '2px !important',
          },
          track: {
            ...styleOverrides.track,
            left: '2px !important',
          },
        },
      },
    },
  }),
  mobile: createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          ...styleOverrides,
          root: {
            ...styleOverrides.root,
            width: '343px',
            '& .MuiSlider-markLabel': {
              ...styleOverrides.root['& .MuiSlider-markLabel'],
              top: '40px',
              fontWeight: fontWeight.lighter,
              fontSize: fontSize.large,
              lineHeight: '150%',
              letterSpacing: '0.25px',
            },
          },
        },
      },
    },
  }),
}
