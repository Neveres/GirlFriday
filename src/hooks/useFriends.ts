import { useState, useEffect, useCallback } from 'react'
import { httpClient } from 'src/libraries'
import { DEFAULT_PARAMS_OF_USER_LIST } from 'src/settings'

export const useFriends = () => {
  const [page, setPage] = useState(DEFAULT_PARAMS_OF_USER_LIST.page)
  const [friends, setFirends] = useState([] as GirlFriday.User[])
  const [hasMore, setHasMore] = useState(true)

  const increasePage = useCallback(() => {
    if (hasMore) {
      setPage(page + 1)
    }
  }, [hasMore, page])

  useEffect(() => {
    httpClient
      .get('users/friends', {
        params: {
          page,
          pageSize: DEFAULT_PARAMS_OF_USER_LIST.pageSize,
        },
      })
      .then((response) => {
        const {
          data: { totalPages, data },
        } = response

        if (hasMore) {
          setFirends([...friends, ...data])
        }

        if (page >= totalPages) {
          setHasMore(false)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return { friends, increasePage, hasMore }
}
