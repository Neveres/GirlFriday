import React, { Suspense, useReducer, useMemo } from 'react'
import { useLocation } from 'react-router'
import { NavBar, AppBody, AppContext, SideBar } from 'src/components'
import { Routes } from 'src/Routes'
import { useInnerWidth } from 'src/hooks'
import {
  reducer,
  SET_MOBILE,
  SET_SEARCH_PARAMETERS,
  SET_SIDE_BAR,
  pathWithSideBar,
} from 'src/libraries'
import { GlobalCss } from './GlobalCss'

const initialState = {
  isMobile: false,
  searchParameters: {
    page: 1,
    pageSize: 6,
    keyword: '',
  } as GirlFriday.SearchParameters,
  showSideBar: false,
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
      setSideBar(showSideBar: boolean) {
        dispatch({ type: SET_SIDE_BAR, ...state, showSideBar })
      },
    }),
    [state],
  )

  useInnerWidth({
    setMobile: actions.setMobile,
    setSideBar: actions.setSideBar,
  })

  const valueOfAppContext = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions],
  )

  const shouldShowSideBar = useMemo(
    () => state.showSideBar && pathWithSideBar(pathname),
    [pathname, state.showSideBar],
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

        <Suspense fallback={<div>Loading...</div>}>
          {/* {shouldShowSideBar && <SideBar />} */}
          {true && <SideBar />}
        </Suspense>
      </AppContext.Provider>

      <GlobalCss />
    </>
  )
}

export default App
