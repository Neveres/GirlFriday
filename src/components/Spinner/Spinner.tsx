/** @jsxImportSource @emotion/react */
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { loadingContainer } from './styles'

const Spinner = () => (
  <div css={loadingContainer}>
    <CircularProgress />
  </div>
)

export default Spinner
