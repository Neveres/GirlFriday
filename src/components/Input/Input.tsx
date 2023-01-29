import React from 'react'
import { TextField, ThemeProvider } from '@mui/material'
import { theme } from './theme'

interface IInput {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  layout: string
}

const Input: React.FC<IInput> = ({ value, onChange, layout }) => {
  return (
    <ThemeProvider theme={theme[layout]}>
      <TextField value={value} onChange={onChange} placeholder="Keyword" />
    </ThemeProvider>
  )
}

export default Input
