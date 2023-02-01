import {
  reducer,
  SET_LAYOUT,
  SET_MOBILE_LAYOUT,
  SET_SEARCH_PARAMETERS,
  SET_SIDE_BAR,
} from 'src/libraries'

describe('reducer', () => {
  test('should return expected state when type is "SET_LAYOUT"', () => {
    const layout = 'mobile'
    expect(
      reducer(
        {} as GirlFriday.AppContext.State,
        {
          type: SET_LAYOUT,
          layout,
        } as GirlFriday.AppContext.Action,
      ),
    ).toStrictEqual({
      layout,
    })
  })

  test('should return expected state when type is "SET_SIDE_BAR"', () => {
    expect(
      reducer(
        {} as GirlFriday.AppContext.State,
        {
          type: SET_SIDE_BAR,
          showSideBar: true,
        } as GirlFriday.AppContext.Action,
      ),
    ).toStrictEqual({
      showSideBar: true,
    })
  })

  test('should return expected state when type is "SET_SEARCH_PARAMETERS"', () => {
    const searchParameters = {}
    expect(
      reducer(
        {} as GirlFriday.AppContext.State,
        {
          type: SET_SEARCH_PARAMETERS,
          searchParameters,
        } as GirlFriday.AppContext.Action,
      ),
    ).toStrictEqual({
      searchParameters,
    })
  })

  test('should return expected state when type is "SET_MOBILE_LAYOUT"', () => {
    expect(
      reducer(
        {} as GirlFriday.AppContext.State,
        {
          type: SET_MOBILE_LAYOUT,
          isMobileLayout: true,
        } as GirlFriday.AppContext.Action,
      ),
    ).toStrictEqual({
      isMobileLayout: true,
    })
  })

  test('should return expected state when there was no type', () => {
    expect(
      reducer(
        {} as GirlFriday.AppContext.State,
        {} as GirlFriday.AppContext.Action,
      ),
    ).toStrictEqual({})
  })
})
