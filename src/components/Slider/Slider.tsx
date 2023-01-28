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

const markMaps: {
  [index: string]: {
    [index: string]: {
      value: number
      label: number
    }
  }
} = {
  desktop: {
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
    74.5: {
      value: 74.5,
      label: 15,
    },
    99: {
      value: 99,
      label: 50,
    },
  },
  mobile: {
    0.5: {
      value: 0.5,
      label: 3,
    },
    19: {
      value: 19,
      label: 6,
    },
    35.25: {
      value: 35.25,
      label: 9,
    },
    52.75: {
      value: 52.75,
      label: 12,
    },
    69.5: {
      value: 69.5,
      label: 15,
    },
    99: {
      value: 99,
      label: 50,
    },
  },
}

const Slider: React.FC<ISlider> = ({ value, setValue, isMobile }) => {
  const markMap = useMemo(
    () => (isMobile ? markMaps.mobile : markMaps.desktop),
    [isMobile],
  )

  const marks = Object.keys(markMap)
    .map((key) => ({ ...markMap[key] }))
    .sort((a, b) => a.value - b.value)
  const scale = (value: number) => {
    return markMap[value].label
  }

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
