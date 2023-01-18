import React, { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const Home = lazy(() => import('src/containers/Home'))
const SearchResult = lazy(() => import('src/containers/SearchResult'))
const Tags = lazy(() => import('src/containers/Tags'))

export enum PagePath {
  Root = '/',
  Home = '/home',
  SearchResult = '/search-result',
  Tags = '/tags',
}

export const menuItems: GirlFriday.NavBarItem[] = [
  {
    name: 'Home',
    path: PagePath.Home,
    isVisible: true,
    withSideBar: true,
  },
  {
    name: 'Search Result',
    path: PagePath.SearchResult,
    isVisible: false,
    withSideBar: true,
  },
  {
    name: 'Tags',
    path: PagePath.Tags,
    isVisible: true,
    withSideBar: false,
  },
]

export const Routes = () =>
  useRoutes([
    {
      path: PagePath.Home,
      element: <Home />,
    },
    {
      path: PagePath.SearchResult,
      element: <SearchResult />,
    },
    {
      path: PagePath.Tags,
      element: <Tags />,
    },
    {
      path: '*',
      element: <Navigate to={PagePath.Home} replace />,
    },
  ])
