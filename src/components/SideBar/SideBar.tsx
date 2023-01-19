/** @jsxImportSource @emotion/react */
import React, { useState, useCallback, useContext, useMemo } from 'react'
import { AppContext } from 'src/components'
import { useUsers, useFriends } from 'src/hooks'
import { menuItems } from 'src/Routes'
import { Tabs, Tab } from './Tabs'
import TabPanel from './TabPanel'
import UserList from './UserList'
import { sideBarContainer } from './styles'

interface ISideBar {
  pathname: string
}

const SideBar: React.FC<ISideBar> = ({ pathname }) => {
  const {
    state: { showSideBar },
  } = useContext(AppContext)
  const [value, setValue] = useState(0)
  const { users, increasePage: fecthMoreUser } = useUsers()
  const { friends, increasePage: fetchMoreFriend } = useFriends()

  const onChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    },
    [],
  )

  const { withSideBar } = useMemo(
    () =>
      menuItems.find(({ path }) => path === pathname) || { withSideBar: false },
    [pathname],
  )

  // return showSideBar && withSideBar ? (
  return true && withSideBar ? (
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
  ) : null
}

export default SideBar
