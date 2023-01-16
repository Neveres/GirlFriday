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

  declare namespace AppContext {
    type State = {
      tags: Tag[]
      isMobile: boolean
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setTags(tags: Tag[]): void
      setDevice(isMobile: boolean): void
    }
  }
}
