import { renderHook } from '@testing-library/react-hooks'
import { useStorage } from 'src/hooks'
import { clear, setItem, getItem } from 'src/libraries'
import { STORAGE_KEY_OF_SEARCH_PARAMETERS } from 'src/settings'

beforeAll(() => {
  clear()
})

afterEach(() => {
  clear()
})

describe('useStorage', () => {
  test('should return object with expected method', () => {
    const {
      result: {
        current: { get, set, remove },
      },
    } = renderHook(useStorage)

    expect(get).toBeDefined()
    expect(set).toBeDefined()
    expect(remove).toBeDefined()
  })

  describe('operate storage testing', () => {
    describe('while shouldParse is false or not given', () => {
      const username = 'username'

      test('set should work well', () => {
        const {
          result: {
            current: { set },
          },
        } = renderHook(() => useStorage(username))

        set(username)
        expect(getItem(username)).toBe(username)
      })

      test('get should work well', () => {
        setItem(username, username)

        const {
          result: {
            current: { get },
          },
        } = renderHook(() => useStorage(username))

        expect(get()).toBe(username)
      })

      test('remove should work well', () => {
        setItem(username, username)

        const {
          result: {
            current: { remove },
          },
        } = renderHook(() => useStorage(username))

        remove()
        expect(getItem(username)).toBe('')
      })
    })

    describe('while shouldParse is true', () => {
      const groups = {}

      test('set should work well', () => {
        const {
          result: {
            current: { set },
          },
        } = renderHook(() => useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true))

        set(groups)
        expect(getItem(STORAGE_KEY_OF_SEARCH_PARAMETERS, true)).toStrictEqual(
          groups,
        )
        expect(getItem(STORAGE_KEY_OF_SEARCH_PARAMETERS)).toStrictEqual('{}')
      })

      test('get should work well', () => {
        setItem(STORAGE_KEY_OF_SEARCH_PARAMETERS, groups)

        const {
          result: {
            current: { get },
          },
        } = renderHook(() => useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true))

        expect(get()).toStrictEqual(groups)
      })

      test('remove should work well', () => {
        setItem(STORAGE_KEY_OF_SEARCH_PARAMETERS, groups)

        const {
          result: {
            current: { remove },
          },
        } = renderHook(() => useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true))

        remove()
        expect(getItem(STORAGE_KEY_OF_SEARCH_PARAMETERS)).toBe('')
      })
    })
  })
})
