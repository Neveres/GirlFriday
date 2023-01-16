import React, { useContext } from 'react'
import { AppContext } from 'src/components'

const Home = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  return <div>Home</div>
}

export default Home
