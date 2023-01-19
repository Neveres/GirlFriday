/** @jsxImportSource @emotion/react */
import React, { useMemo, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/components'
import { menuItems } from 'src/Routes'
import union_dark from 'src/assets/union_dark.svg'
import union_light from 'src/assets/union_light.svg'
import { navBarContainer } from './styles'

interface INavBar {
  pathname: string
}

const NavBar: React.FC<INavBar> = ({ pathname }) => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  const renderMenuItems = useMemo(
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
                    {name}
                  </>
                ) : (
                  <img src={union_dark} />
                )}
              </Link>
            </div>
          )
        )
      }),
    [pathname],
  )

  return (
    <div css={navBarContainer}>
      <div className="navBar-logo-container">
        <div className="navBar-logo">LOGO</div>
      </div>
      <div className="navBar-items">{renderMenuItems}</div>
    </div>
  )
}

export default NavBar
