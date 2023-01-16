import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from 'src/Routes'

const NavBar = () => {
  const renderMenuItems = useMemo(
    () =>
      menuItems.map((item) => {
        const { name, path } = item

        return (
          <button key={path}>
            <Link to={path}>{name}</Link>
          </button>
        )
      }),
    [],
  )

  return <div>{renderMenuItems}</div>
}

export default NavBar
