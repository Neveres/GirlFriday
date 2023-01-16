import { createContext } from 'react'

const AppContext = createContext(
  {} as {
    state: GirlFriday.AppContext.State
    actions: GirlFriday.AppContext.Actions
  },
)

export default AppContext
