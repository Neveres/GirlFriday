/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react'
import { useUsers, useFriends } from 'src/hooks'
import { Tabs, Tab } from './Tabs'
import TabPanel from './TabPanel'
import UserList from './UserList'
import { sideBarContainer } from './styles'

const SideBar = () => {
  const [value, setValue] = useState(0)
  const { users, increasePage: loadMoreUsers } = useUsers()
  const { friends, increasePage: loadMoreFriends } = useFriends()

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
        <UserList users={users} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserList users={friends} />
      </TabPanel>
    </div>
  )
}

export default SideBar
