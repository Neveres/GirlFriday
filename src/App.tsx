/** @jsxImportSource @emotion/react */
import React, { Suspense, useReducer, useMemo } from 'react'
import { useLocation } from 'react-router'
import { NavBar, AppBody, AppContext, SideBar } from 'src/components'
import { Routes } from 'src/Routes'
import { useInnerWidth } from 'src/hooks'
import {
  reducer,
  SET_MOBILE_LAYOUT,
  SET_SEARCH_PARAMETERS,
  SET_SIDE_BAR,
  SET_LAYOUT,
  pathWithSideBar,
} from 'src/libraries'
import { Layout } from 'src/settings'
import { GlobalCss, appContainer } from './GlobalCss'

const initialState = {
  isMobileLayout: false,
  searchParameters: {
    page: 1,
    pageSize: 6,
    keyword: '',
  } as GirlFriday.SearchParameters,
  showSideBar: false,
  layout: Layout.Desktop,
}

const App = () => {
  const { pathname } = useLocation()

  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useMemo(
    () => ({
      setSearchParameters(searchParameters: GirlFriday.SearchParameters) {
        dispatch({ type: SET_SEARCH_PARAMETERS, ...state, searchParameters })
      },
      setMobileLayout(isMobileLayout: boolean) {
        dispatch({ type: SET_MOBILE_LAYOUT, ...state, isMobileLayout })
      },
      setSideBar(showSideBar: boolean) {
        dispatch({ type: SET_SIDE_BAR, ...state, showSideBar })
      },
      setLayout(layout: string) {
        dispatch({ type: SET_LAYOUT, ...state, layout })
      },
    }),
    [state],
  )

  useInnerWidth({
    setMobileLayout: actions.setMobileLayout,
    setSideBar: actions.setSideBar,
    setLayout: actions.setLayout,
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
    <div css={appContainer[state.layout]}>
      <AppContext.Provider value={valueOfAppContext}>
        <NavBar pathname={pathname} />

        <AppBody pathname={pathname}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </AppBody>

        <Suspense fallback={<div>Loading...</div>}>
          {shouldShowSideBar && <SideBar />}
        </Suspense>
      </AppContext.Provider>

      <GlobalCss />
    </div>
  )
}

export default App
