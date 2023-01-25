import { createTheme } from '@mui/material'
import { colors } from 'src/GlobalCss'

const styleOverrides = {
  root: {
    width: '724px',
    '& .MuiSlider-markLabel': {
      top: '34px',
      color: colors.textWhite,
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
    '& .MuiSlider-rail': {
      height: '8px',
    },
  },
  track: {
    background: 'linear-gradient(270deg, #ffd25f 0.13%, #ff5c01 100%)',
  },
  thumb: {
    width: '25px',
    height: '25px',
    background: '#1B1B1B',
    border: '6px solid #FFD05D',
  },
}

export const theme = {
  desktop: createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          ...styleOverrides,
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
            width: '320px',
          },
        },
      },
    },
  }),
}