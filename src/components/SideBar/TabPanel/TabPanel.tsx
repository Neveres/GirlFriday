/** @jsxImportSource @emotion/react */
import React from 'react'
import { tabPanelContainer } from './styles'

interface ITabPanel {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel: React.FC<ITabPanel> = ({ children, index, value }) => {
  return (
    <div
      css={tabPanelContainer}
      className="tabpanel"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

export default TabPanel
