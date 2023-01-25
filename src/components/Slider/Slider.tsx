/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react'
import { Slider as MuiSlider, ThemeProvider } from '@mui/material'
import { SliderUnstyledOwnProps } from '@mui/base/SliderUnstyled'
import { theme } from './theme'
import { sliderContainer } from './styles'

interface ISlider {
  value: number
  setValue: (value: number) => void
  isMobile: boolean
}

const markMap: {
  [index: string]: {
    value: number
    label: number
  }
} = {
  0.5: {
    value: 0.5,
    label: 3,
  },
  19.25: {
    value: 19.25,
    label: 6,
  },
  37.5: {
    value: 37.5,
    label: 9,
  },
  56.25: {
    value: 56.25,
    label: 12,
  },
  74.25: {
    value: 74.25,
    label: 15,
  },
  99: {
    value: 99,
    label: 50,
  },
}

const marks = Object.keys(markMap)
  .map((key) => ({ ...markMap[key] }))
  .sort((a, b) => a.value - b.value)
const scale = (value: number) => {
  return markMap[value].label
}

const Slider: React.FC<ISlider> = ({ value, setValue, isMobile }) => {
  const onChange: SliderUnstyledOwnProps['onChange'] = (event, newValue) => {
    setValue(markMap[newValue as number].label)
  }

  const trasnformedValue = useMemo(
    () => marks.find((mark) => mark.label === value)?.value,
    [value],
  )

  return (
    <div css={isMobile ? sliderContainer.mobile : sliderContainer.desktop}>
      <ThemeProvider theme={isMobile ? theme.mobile : theme.desktop}>
        <MuiSlider
          value={trasnformedValue}
          valueLabelDisplay="auto"
          marks={marks}
          step={null}
          max={marks[marks.length - 1].value}
          min={marks[0].value}
          onChange={onChange}
          scale={scale}
        />
      </ThemeProvider>
    </div>
  )
}

export default Slider
