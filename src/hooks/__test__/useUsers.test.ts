import { waitFor, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useUsers } from 'src/hooks'

const data = [
  {
    id: '4fd52714-3926-4e43-9488-01d0e2f63d18',
    name: 'Lew Schultz',
    username: 'Alysson_Weber68',
    avater: 'https://cdn.fakercloud.com/avatars/lebronjennan_128.jpg',
    isFollowing: false,
  },
  {
    id: '9b1c64f8-dfb4-47f9-aa7f-43ef8ef5a3f8',
    name: 'Amanda Crooks',
    username: 'Kenton24',
    avater: 'https://cdn.fakercloud.com/avatars/swooshycueb_128.jpg',
    isFollowing: false,
  },
]

const mockResponse = {
  data: {
    totalPages: Infinity,
    data: [
      {
        ...data[0],
      },
    ],
  },
}
jest.mock('src/libraries', () => ({
  ...jest.requireActual('src/libraries'),
  httpClient: { get: () => new Promise((resolve) => resolve(mockResponse)) },
}))

describe('useUsers', () => {
  test('should return expected users without given searchParameters', async () => {
    const { result } = renderHook(useUsers)

    await waitFor(() => {
      expect(result.current.users).toStrictEqual([data[0]])
    })
  })

  test('should return expected users while given searchParameters', async () => {
    const { result } = renderHook(useUsers, {
      initialProps: {
        keyword: 'keyword',
        pageSize: 1,
        page: 1,
      },
    })

    await waitFor(() => {
      expect(result.current.users).toStrictEqual([data[0]])
    })
  })

  test('increasePage should work well', async () => {
    const { result } = renderHook(useUsers)

    await waitFor(() => {
      expect(result.current.users).toStrictEqual([data[0]])
    })

    mockResponse.data.data = [
      {
        ...data[1],
      },
    ]

    act(() => {
      result.current.increasePage()
    })

    await waitFor(() => {
      expect(result.current.users).toStrictEqual(data)
    })
  })

  test('hasMore should be set false while reaching totalPages', async () => {
    mockResponse.data.totalPages = 1
    const { result } = renderHook(useUsers)

    await waitFor(() => {
      expect(result.current.hasMore).toBeFalsy()
      expect(result.current.users).toStrictEqual([data[1]])
    })
  })

  test("increasePage won't increase page while hasMore is false", async () => {
    const { result } = renderHook(useUsers)

    await waitFor(() => {
      expect(result.current.hasMore).toBeFalsy()
      expect(result.current.users).toStrictEqual([data[1]])
    })

    act(() => {
      result.current.increasePage()
    })

    await waitFor(() => {
      expect(result.current.hasMore).toBeFalsy()
    })
  })
})
