import { createTheme, Theme } from '@mui/material'
import { colors, fontFamily, fontWeight, fontSize } from 'src/GlobalCss'

const style = {
  width: '343px',
  height: '40px',
  backgroundColor: colors.textWhite,
  borderRadius: '4px',
  fontFamily: fontFamily.ubuntu,
  fontWeight: fontWeight.bolder,
  fontSize: fontSize.large,
  lineHeight: '100%',
  color: colors.textBlack,
  '&:hover': {
    border: `1px solid ${colors.textWhite}`,
    backgroundColor: colors.textBlack,
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
            padding: '5px 8px 6px 9px',
          },
        },
      },
    },
  }),
}
