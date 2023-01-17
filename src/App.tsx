import React, { Suspense, useReducer, useMemo } from 'react'
import { useLocation } from 'react-router'
import { NavBar, AppBody, AppContext } from 'src/components'
import { Routes } from 'src/Routes'
import { useDevice } from 'src/hooks'
import { reducer, SET_MOBILE, SET_SEARCH_PARAMETERS } from 'src/libraries'
import { GlobalCss } from './GlobalCss'

const initialState = {
  isMobile: false,
  searchParameters: {
    page: 1,
    pageSize: 10,
    keyword: '',
  } as GirlFriday.SearchParameters,
}

const App = () => {
  const { pathname } = useLocation()

  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useMemo(
    () => ({
      setSearchParameters(searchParameters: GirlFriday.SearchParameters) {
        dispatch({ type: SET_SEARCH_PARAMETERS, ...state, searchParameters })
      },
      setMobile(isMobile: boolean) {
        dispatch({ type: SET_MOBILE, ...state, isMobile })
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
      <AppContext.Provider value={valueOfAppContext}>
        <NavBar pathname={pathname} />

        <AppBody pathname={pathname}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </AppBody>
      </AppContext.Provider>

      <GlobalCss />
    </>
  )
}

export default App
