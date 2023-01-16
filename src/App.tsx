import React, { Suspense } from 'react'
import { useLocation } from 'react-router'
import { NavBar, AppBody } from 'src/components'

import { Routes } from './Routes'

const App = () => {
  const { pathname } = useLocation()

  return (
    <>
      <NavBar />
      <AppBody pathname={pathname}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </AppBody>
    </>
  )
}

export default App
