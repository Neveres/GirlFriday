/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { PagePath } from 'src/Routes'
import { mobilePageHeader } from './styles'

const MobileHeader = () => {
  const navigate = useNavigate()
  const backToHomePage = useCallback(() => {
    navigate(PagePath.Home)
  }, [navigate])

  return (
    <div css={mobilePageHeader}>
      <KeyboardArrowLeftIcon onClick={backToHomePage} />
      <span>Home Page</span>
    </div>
  )
}

export default MobileHeader
