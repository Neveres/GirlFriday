import React, { useMemo } from 'react'
import { Slider as MuiSlider, ThemeProvider } from '@mui/material'
import { SliderUnstyledOwnProps } from '@mui/base/SliderUnstyled'
import { theme } from './theme'

interface ISlider {
  value: number
  setValue: (value: number) => void
  isMobile: boolean
}

const values = [3, 6, 9, 12, 15, 50]
const interval = 100 / values.length
const marks = values.map((value, index) => ({
  value: interval * index,
  label: value,
  scaledValue: value,
}))
const max = interval * (values.length - 1)
const scale = (value: number) => {
  const transformedMark = marks.find((mark) => mark.value === value)
  if (transformedMark) {
    return transformedMark?.scaledValue as number
  } else {
    const target = marks.find((mark) => mark.scaledValue === value)
    return target?.value as number
  }
}

const Slider: React.FC<ISlider> = ({ value, setValue, isMobile }) => {
  const onChange: SliderUnstyledOwnProps['onChange'] = (event, newValue) => {
    const index = (newValue as number) / interval
    setValue(marks[index].scaledValue)
  }

  const trasnformedValue = useMemo(
    () => marks.find((mark) => mark.scaledValue === value)?.value,
    [value],
  )

  return (
    <ThemeProvider theme={isMobile ? theme.mobile : theme.desktop}>
      <MuiSlider
        value={trasnformedValue}
        valueLabelDisplay="auto"
        marks={marks}
        step={null}
        max={max}
        min={0}
        onChange={onChange}
        scale={scale}
      />
    </ThemeProvider>
  )
}

export default Slider
