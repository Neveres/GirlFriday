import React from 'react'
import { Button as MuiButton, ThemeProvider } from '@mui/material'
import { Contained } from './Contained'
import { Outlined } from './Outlined'
import { theme } from './theme'

interface IButton {
  onClick?: () => void
  text: string
  layout?: string
  type?: string
}

const Button: React.FC<IButton> = ({
  onClick,
  text,
  layout = 'desktop',
  type,
}) => {
  switch (type) {
    case 'contained':
      return <Contained text={text} />
    case 'outlined':
      return <Outlined text={text} />
    default:
      return (
        <ThemeProvider theme={theme[layout]}>
          <MuiButton className="mobile" onClick={onClick}>
            {text}
          </MuiButton>
        </ThemeProvider>
      )
  }
}

export default Button
