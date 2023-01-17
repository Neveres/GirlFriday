import React from 'react'
import { Slider as MuiSlider } from '@mui/material'
import { SliderUnstyledOwnProps } from '@mui/base/SliderUnstyled'

interface ISlider {
  value: number
  setValue: (value: number) => void
}

const values = [3, 6, 9, 12, 15, 50]
const marks = values.map((value) => ({
  value,
  label: value,
}))

const Slider: React.FC<ISlider> = ({ value, setValue }) => {
  const onChange: SliderUnstyledOwnProps['onChange'] = (event, newValue) => {
    setValue(newValue as number)
  }

  return (
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
  )
}

export default Slider
