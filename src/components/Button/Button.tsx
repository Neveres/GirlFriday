import React from 'react'
import { Button as MuiButton, ThemeProvider } from '@mui/material'
import { theme } from './theme'

interface IButton {
  onClick: () => void
  text: string
  layout: string
}

const Button: React.FC<IButton> = ({ onClick, text, layout }) => {
  return (
    <ThemeProvider theme={theme[layout]}>
      <MuiButton className="mobile" onClick={onClick}>
        {text}
      </MuiButton>
    </ThemeProvider>
  )
}

export default Button
