import { waitFor, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useFriends } from 'src/hooks'

const data = [
  {
    id: 'd3938d18-4e2a-4acf-906c-039e69747ad1',
    name: 'Jason Senger',
    username: 'Hertha43',
    avater: 'https://cdn.fakercloud.com/avatars/adamawesomeface_128.jpg',
    isFollowing: true,
  },
  {
    id: '04e21ffe-9876-45d2-ad18-13223cbe4cd8',
    name: 'Nellie Conroy',
    username: 'Roosevelt32',
    avater: 'https://cdn.fakercloud.com/avatars/swaplord_128.jpg',
    isFollowing: true,
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

describe('useFriends', () => {
  test('should return expected friends', async () => {
    const { result } = renderHook(useFriends)

    await waitFor(() => {
      expect(result.current.friends).toStrictEqual([data[0]])
    })
  })

  test('increasePage should work well', async () => {
    const { result } = renderHook(useFriends)

    await waitFor(() => {
      expect(result.current.friends).toStrictEqual([data[0]])
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
      expect(result.current.friends).toStrictEqual(data)
    })
  })

  test('hasMore should be set false while reaching totalPages', async () => {
    mockResponse.data.totalPages = 1
    const { result } = renderHook(useFriends)

    await waitFor(() => {
      expect(result.current.hasMore).toBeFalsy()
      expect(result.current.friends).toStrictEqual([data[1]])
    })
  })

  test("increasePage won't increase page while hasMore is false", async () => {
    const { result } = renderHook(useFriends)

    await waitFor(() => {
      expect(result.current.hasMore).toBeFalsy()
      expect(result.current.friends).toStrictEqual([data[1]])
    })

    act(() => {
      result.current.increasePage()
    })

    await waitFor(() => {
      expect(result.current.hasMore).toBeFalsy()
    })
  })
})
