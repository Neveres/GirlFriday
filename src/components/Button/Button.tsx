import React from 'react'
import { Button as MuiButton, ThemeProvider } from '@mui/material'
import { theme } from './theme'

interface IButton {
  onClick: () => void
  text: string
  isMobile: boolean
}

const Button: React.FC<IButton> = ({ onClick, text, isMobile }) => {
  return (
    <ThemeProvider theme={isMobile ? theme.mobile : theme.desktop}>
      <MuiButton className="mobile" onClick={onClick}>
        {text}
      </MuiButton>
    </ThemeProvider>
  )
}

export default Button
