import { createTheme } from '@mui/material'
import { colors } from 'src/GlobalCss'

const style = {
  width: '343px',
  height: '40px',
  backgroundColor: colors.textWhite,
  borderRadius: '4px',
  fontSize: '14px',
  lineHeight: '100%',
  color: '#121212',
  '&:hover': {
    border: `1px solid ${colors.textWhite}`,
    backgroundColor: '#121212',
    color: colors.textWhite,
  },
}

export const theme = {
  desktop: createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            ...style,
          },
        },
      },
    },
  }),
  mobile: createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            ...style,
            width: '335px',
          },
        },
      },
    },
  }),
}
