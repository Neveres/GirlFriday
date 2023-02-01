import React from 'react'
import { Tabs as MuiTabs, Tab as MuiTab } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors, fontWeight, fontFamily } from 'src/GlobalCss'

interface IStyledTabProps {
  label: string
}

export const Tabs = styled(MuiTabs)({
  '& .MuiTabs-indicator': {
    width: '187px !important',
    backgroundColor: colors.textWhite,
  },
})

export const Tab = styled((props: IStyledTabProps) => (
  <MuiTab disableRipple {...props} />
))(() => ({
  textTransform: 'none',
  fontFamily: fontFamily.ubuntu,
  fontWeight: fontWeight.lighter,
  color: '#929292',
  fontSize: '16px',
  lineHeight: '150%',
  textAlign: 'center',
  letterSpacing: '0.4px',
  opacity: 0.87,
  '&.Mui-selected': {
    color: colors.textWhite,
    fontWeight: fontWeight.bolder,
    opacity: 1,
  },
}))
