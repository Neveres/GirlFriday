/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo } from 'react'
import { AppContext, SideBar } from 'src/components'
import { menuItems } from 'src/Routes'
import { appBodyContainer } from './styles'

export interface IAppBodyProps {
  pathname: string
  children?: React.ReactElement
}

const AppBody: React.FC<IAppBodyProps> = ({ pathname, children }) => {
  const {
    state: { showSideBar },
  } = useContext(AppContext)

  const { withSideBar } = useMemo(
    () =>
      menuItems.find(({ path }) => path === pathname) as GirlFriday.NavBarItem,
    [pathname],
  )

  return (
    <div css={appBodyContainer}>
      {children}
      {showSideBar && withSideBar && <SideBar />}
    </div>
  )
}

export default AppBody
