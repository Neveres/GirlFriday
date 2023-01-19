/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react'
import { useUsers, useFriends } from 'src/hooks'
import { Tabs, Tab } from './Tabs'
import TabPanel from './TabPanel'
import UserList from './UserList'
import { sideBarContainer } from './styles'

const SideBar = () => {
  const [value, setValue] = useState(0)
  const { users, increasePage: fecthMoreUser } = useUsers()
  const { friends, increasePage: fetchMoreFriend } = useFriends()

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
        <UserList users={users} fetchMoreUser={fecthMoreUser} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserList users={friends} fetchMoreUser={fetchMoreFriend} />
      </TabPanel>
    </div>
  )
}

export default SideBar
