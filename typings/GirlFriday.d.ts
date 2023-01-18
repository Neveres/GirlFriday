export = GirlFriday
export as namespace GirlFriday

declare namespace GirlFriday {
  type NavBarItem = {
    name: string
    path: string
    isVisible: boolean
    withSideBar: boolean
  }

  type Tag = {
    id: string
    name: string
    count: number
  }

  type Firend = {
    id: string
    name: string
    username: string
    avater: string
  }

  type SearchResult = Firend & {
    isFollowing: boolean
  }

  type SearchParameters = {
    page: number
    pageSize: number
    keyword?: string
  }

  declare namespace AppContext {
    type State = {
      searchParameters: SearchParameters
      isMobile: boolean
      showSideBar: boolean
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setSearchParameters(searchParameters: SearchParameters): void
      setMobile(isMobile: boolean): void
      setSideBar(showSideBar: boolean): void
    }
  }
}
