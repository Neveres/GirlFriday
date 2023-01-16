export = GirlFriday
export as namespace GirlFriday

declare namespace GirlFriday {
  type NavBarItem = {
    name: string
    path: string
    isVisible: boolean
  }

  type Tag = {
    id: string
    name: string
    count: number
  }

  type SearchParameters = {
    page: number
    pageSize: number
    keyword: string
  }

  declare namespace AppContext {
    type State = {
      searchParameters: SearchParameters
      isMobile: boolean
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setSearchParameters(searchParameters: SearchParameters): void
      setMobile(isMobile: boolean): void
    }
  }
}
