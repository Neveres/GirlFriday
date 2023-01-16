import { SET_SEARCH_PARAMETERS, SET_MOBILE } from 'src/libraries'

export const reducer = (
  state: GirlFriday.AppContext.State,
  action: GirlFriday.AppContext.Action,
) => {
  const { type, isMobile, searchParameters } = action

  switch (type) {
    case SET_MOBILE:
      return {
        ...state,
        isMobile,
      }
    case SET_SEARCH_PARAMETERS:
      return {
        ...state,
        searchParameters,
      }
    default:
      return state
  }
}
