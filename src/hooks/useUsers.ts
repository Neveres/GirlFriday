import { useState, useEffect, useCallback, useMemo } from 'react'
import { httpClient } from 'src/libraries'
import { DEFAULT_PARAMS_OF_USER_LIST } from 'src/settings'

export const useUsers = (searchParameters?: GirlFriday.SearchParameters) => {
  const [users, setUsers] = useState([] as GirlFriday.User[])
  const [page, setPage] = useState(DEFAULT_PARAMS_OF_USER_LIST.page)
  const [hasMore, setHasMore] = useState(true)

  const params = useMemo(
    () =>
      searchParameters
        ? { ...searchParameters, page }
        : { ...DEFAULT_PARAMS_OF_USER_LIST, page },
    [page, searchParameters],
  )

  const increasePage = useCallback(() => {
    if (hasMore) {
      setPage(page + 1)
    }
  }, [hasMore, page])

  useEffect(() => {
    const { keyword } = params
    if (typeof keyword !== 'string' || keyword !== '') {
      httpClient
        .get('users/all', {
          params,
        })
        .then((response) => {
          const {
            data: { totalPages, data },
          } = response

          if (page >= totalPages) {
            setHasMore(false)
          } else {
            if (page === 1) {
              setUsers(data)
            } else {
              setUsers([...users, ...data])
            }
          }
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, params])

  return { users, increasePage, hasMore }
}
