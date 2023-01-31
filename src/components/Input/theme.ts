import { createTheme, Theme } from '@mui/material'
import { colors, fontFamily, fontSize, fontWeight } from 'src/GlobalCss'

const style = {
  width: '725px',
  height: '60px',
  borderRadius: '6px',
  color: colors.textWhite,
  '& input': {
    width: '725px',
    height: '60px',
    marginTop: '-1px',
    marginLeft: '4px',
    fontFamily: fontFamily.ubuntu,
    fontWeight: fontWeight.lighter,
    fontSize: fontSize.large,
    lineHeight: '150%',
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${colors.bgPrimary} inset`,
      WebkitTextFillColor: colors.textWhite,
    },
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    width: '725px',
    height: '63.5px',
    boxSizing: 'border-box',
    border: '3px solid rgba(255, 255, 255, 0.5)',
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '3px solid #FF9B33',
    },
  },
}

export const theme: { [index: string]: Theme } = {
  desktop: createTheme({
    components: {
      MuiOutlinedInput: {
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
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            ...style,
            width: '335px',
            '& input': {
              ...style['& input'],
              width: '335px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              ...style['& .MuiOutlinedInput-notchedOutline'],
              width: '335px',
              height: '64px',
            },
          },
        },
      },
    },
  }),
}
