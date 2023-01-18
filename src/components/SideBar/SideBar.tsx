/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react'
import { Tabs, Tab } from './Tabs'
import TabPanel from './TabPanel'
import { sideBarContainer } from './styles'

const SideBar = () => {
  const [value, setValue] = useState(0)
  const onChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    },
    [],
  )

  return (
    <div css={sideBarContainer}>
      <Tabs value={value} onChange={onChange} variant="fullWidth">
        <Tab label="Followers" />
        <Tab label="Following" />
      </Tabs>

      <TabPanel value={value} index={0}>
        Followers
      </TabPanel>
      <TabPanel value={value} index={1}>
        Following
      </TabPanel>
    </div>
  )
}

export default SideBar
