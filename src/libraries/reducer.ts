import {
  SET_SEARCH_PARAMETERS,
  SET_MOBILE_LAYOUT,
  SET_SIDE_BAR,
  SET_LAYOUT,
} from 'src/libraries'

export const reducer = (
  state: GirlFriday.AppContext.State,
  action: GirlFriday.AppContext.Action,
) => {
  const { type, isMobileLayout, searchParameters, showSideBar, layout } = action

  switch (type) {
    case SET_MOBILE_LAYOUT:
      return {
        ...state,
        isMobileLayout,
      }
    case SET_SEARCH_PARAMETERS:
      return {
        ...state,
        searchParameters,
      }
    case SET_SIDE_BAR:
      return {
        ...state,
        showSideBar,
      }

    case SET_LAYOUT:
      return {
        ...state,
        layout,
      }
    default:
      return state
  }
}
