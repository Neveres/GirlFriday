import { SET_DEVICE, SET_TAGS } from 'src/libraries'

export const reducer = (
  state: GirlFriday.AppContext.State,
  action: GirlFriday.AppContext.Action,
) => {
  const { type, isMobile, tags } = action

  switch (type) {
    case SET_DEVICE:
      return {
        ...state,
        isMobile,
      }
    case SET_TAGS:
      return {
        ...state,
        tags,
      }
    default:
      return state
  }
}
