import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '3px solid rgba(255, 255, 255, 0.5)',
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '3px solid #FF9B33',
            },
          },
        },
      },
    },
  },
})
