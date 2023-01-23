import React from 'react'
import { TextField, ThemeProvider } from '@mui/material'
import { theme } from './theme'

interface IInput {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isMobile: boolean
}

const Input: React.FC<IInput> = ({ value, onChange, isMobile }) => {
  return (
    <ThemeProvider theme={isMobile ? theme.mobile : theme.desktop}>
      <TextField value={value} onChange={onChange} placeholder="Keyword" />
    </ThemeProvider>
  )
}

export default Input
