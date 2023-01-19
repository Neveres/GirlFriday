import React, { useContext } from 'react'
import { Button as MuiButton, ThemeProvider } from '@mui/material'
import { AppContext } from 'src/components'
import { theme } from './theme'

interface IButton {
  onClick: () => void
  text: string
}

const Button: React.FC<IButton> = ({ onClick, text }) => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  return (
    <ThemeProvider theme={isMobile ? theme.mobile : theme.desktop}>
      <MuiButton className="mobile" onClick={onClick}>
        {text}
      </MuiButton>
    </ThemeProvider>
  )
}

export default Button
