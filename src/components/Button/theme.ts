import { createTheme, Theme } from '@mui/material'
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
  padding: '6px 8px 6px 9px',
}

export const theme: { [index: string]: Theme } = {
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
