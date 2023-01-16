import React from 'react'
import { Button as MuiButton } from '@mui/material'

interface IButton {
  onClick: () => void
}

const Button: React.FC<IButton> = ({ onClick }) => {
  return <MuiButton onClick={onClick}>Search</MuiButton>
}

export default Button
