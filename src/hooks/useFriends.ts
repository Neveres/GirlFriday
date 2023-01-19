import { useState, useEffect, useCallback } from 'react'
import { httpClient } from 'src/libraries'
import { DEFAULT_PARAMS_OF_USER_LIST } from 'src/settings'

export const useFriends = () => {
  const [page, setPage] = useState(DEFAULT_PARAMS_OF_USER_LIST.page)
  const [friends, setFirends] = useState([] as GirlFriday.User[])

  useEffect(() => {
    httpClient
      .get('users/friends', {
        params: {
          page,
          pageSize: DEFAULT_PARAMS_OF_USER_LIST.pageSize,
        },
      })
      .then((response) => {
        setFirends([...friends, ...response.data.data])
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const increasePage = useCallback(() => {
    setPage(page + 1)
  }, [page])

  return { friends, increasePage }
}
