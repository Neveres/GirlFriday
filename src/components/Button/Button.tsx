import React from 'react'
import { Button as MuiButton } from '@mui/material'

interface IButton {
  onClick: () => void
  text: string
}

const Button: React.FC<IButton> = ({ onClick, text }) => {
  return <MuiButton onClick={onClick}>{text}</MuiButton>
}

export default Button
