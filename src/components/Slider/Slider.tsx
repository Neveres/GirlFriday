import React from 'react'
import { Slider as MuiSlider, ThemeProvider } from '@mui/material'
import { SliderUnstyledOwnProps } from '@mui/base/SliderUnstyled'
import { theme } from './theme'

interface ISlider {
  value: number
  setValue: (value: number) => void
  isMobile: boolean
}

const values = [3, 6, 9, 12, 15, 50]
const marks = values.map((value) => ({
  value,
  label: value,
}))

const Slider: React.FC<ISlider> = ({ value, setValue, isMobile }) => {
  const onChange: SliderUnstyledOwnProps['onChange'] = (event, newValue) => {
    setValue(newValue as number)
  }

  return (
    <ThemeProvider theme={isMobile ? theme.mobile : theme.desktop}>
      <MuiSlider
        defaultValue={value}
        value={value}
        valueLabelDisplay="auto"
        marks={marks}
        step={null}
        max={values[values.length - 1]}
        min={values[0]}
        onChange={onChange}
      />
    </ThemeProvider>
  )
}

export default Slider
