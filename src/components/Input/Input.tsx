/** @jsxImportSource @emotion/react */
import React from 'react'
import { TextField, ThemeProvider } from '@mui/material'
import { colors } from 'src/GlobalCss'
import { textFieldContainer } from './styles'
import { theme } from './theme'

interface IInput {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInput> = ({ value, onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        inputProps={{
          style: { color: colors.textWhite },
        }}
        value={value}
        onChange={onChange}
        placeholder="Keyword"
        css={textFieldContainer}
      />
    </ThemeProvider>
  )
}

export default Input
