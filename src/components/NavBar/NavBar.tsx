/** @jsxImportSource @emotion/react */
import React, { useMemo, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/components'
import { menuItems } from 'src/Routes'
import union_dark from 'src/assets/union_dark.svg'
import union_light from 'src/assets/union_light.svg'
import {
  navBarContainer,
  navBarHeaderContainer,
  navBarFooterContainer,
} from './styles'

interface INavBar {
  pathname: string
}

const NavBar: React.FC<INavBar> = ({ pathname }) => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  const MenuItems = useMemo(
    () =>
      menuItems.map((item) => {
        const { name, path, isInNavBar } = item

        const isFocus =
          pathname === path ||
          (pathname === '/search-result' && path === '/home')

        return (
          isInNavBar && (
            <div key={path} className="navBar-item">
              <Link to={path}>
                {isFocus ? (
                  <>
                    <img src={union_light} />
                    {!isMobile && name}
                  </>
                ) : (
                  <img src={union_dark} />
                )}
              </Link>
            </div>
          )
        )
      }),
    [isMobile, pathname],
  )

  const withNavBar = useMemo(
    () => menuItems.find(({ path }) => pathname === path)?.withNavBar || false,
    [pathname],
  )

  return isMobile ? (
    withNavBar ? (
      <>
        <div css={navBarHeaderContainer}>
          <div className="navBar-logo">LOGO</div>
        </div>
        <div css={navBarFooterContainer}>
          <div className="navBar-items">{MenuItems}</div>
        </div>
      </>
    ) : null
  ) : (
    <div css={navBarContainer}>
      <div className="navBar-logo-container">
        <div className="navBar-logo">LOGO</div>
      </div>
      <div className="navBar-items">{MenuItems}</div>
    </div>
  )
}

export default NavBar
