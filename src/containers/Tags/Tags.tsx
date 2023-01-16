import React, { useContext } from 'react'
import { AppContext } from 'src/components'

const Tags = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  return <div>Tags</div>
}

export default Tags
