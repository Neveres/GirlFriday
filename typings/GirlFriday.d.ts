export = GirlFriday
export as namespace GirlFriday

import { Layout } from 'src/settings'

declare namespace GirlFriday {
  type NavBarItem = {
    name: string
    path: string
    isInNavBar: boolean
    withSideBar: boolean
    withNavBar: boolean
  }

  type Tag = {
    id: string
    name: string
    count: number
  }

  type User = {
    id: string
    name: string
    username: string
    avater: string
    isFollowing?: boolean
  }

  type SearchParameters = {
    page: number
    pageSize: number
    keyword?: string
  }

  type keyOfLayout = keyof typeof Layout

  declare namespace AppContext {
    type State = {
      searchParameters: SearchParameters
      isMobile: boolean
      showSideBar: boolean
      layout: keyOfLayout
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setSearchParameters(searchParameters: SearchParameters): void
      setMobile(isMobile: boolean): void
      setSideBar(showSideBar: boolean): void
      setLayout(layout: keyOfLayout): void
    }
  }
}
