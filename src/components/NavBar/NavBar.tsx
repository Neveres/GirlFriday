/** @jsxImportSource @emotion/react */
import React, { useMemo, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/components'
import { menuItems } from 'src/Routes'
import { navBarContainer } from './styles'

const NavBar = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  const renderMenuItems = useMemo(
    () =>
      menuItems.map((item) => {
        const { name, path, isVisible } = item

        return (
          isVisible && (
            <div key={path} className="navBar-item">
              <Link to={path}>{name}</Link>
            </div>
          )
        )
      }),
    [],
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
