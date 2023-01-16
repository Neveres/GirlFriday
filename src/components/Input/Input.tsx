/** @jsxImportSource @emotion/react */
import React, { useState, useCallback, RefObject } from 'react'
import { TextField, ThemeProvider } from '@mui/material'
import { colors } from 'src/GlobalCss'
import { textFieldContainer } from './styles'
import { theme } from './theme'

interface IInput {
  inputRef: RefObject<HTMLDivElement>
}

const Input: React.FC<IInput> = ({ inputRef }) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(
    ({ target: { value: newValue } }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(newValue)
    },
    [],
  )

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
        ref={inputRef}
      />
    </ThemeProvider>
  )
}

export default Input
