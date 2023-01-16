import React, { Suspense, useReducer, useMemo } from 'react'
import { useLocation } from 'react-router'
import { NavBar, AppBody, AppContext } from 'src/components'
import { Routes } from 'src/Routes'
import { useDevice } from 'src/hooks'
import { reducer, SET_DEVICE, SET_TAGS } from 'src/libraries'

const initialState = {
  isMobile: false,
  tags: [] as GirlFriday.Tag[],
}

const App = () => {
  const { pathname } = useLocation()

  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useMemo(
    () => ({
      setTags(tags: GirlFriday.Tag[]) {
        dispatch({ type: SET_TAGS, ...state, tags })
      },
      setMobile(isMobile: boolean) {
        dispatch({ type: SET_DEVICE, ...state, isMobile })
      },
    }),
    [state],
  )
  useDevice({ setMobile: actions.setMobile })
  const valueOfAppContext = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions],
  )

  return (
    <>
      <NavBar />
      <AppBody pathname={pathname}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppContext.Provider value={valueOfAppContext}>
            <Routes />
          </AppContext.Provider>
        </Suspense>
      </AppBody>
    </>
  )
}

export default App
