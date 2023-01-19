import { useState, useEffect, useCallback, useMemo } from 'react'
import { httpClient } from 'src/libraries'
import { DEFAULT_PARAMS_OF_USER_LIST } from 'src/settings'

export const useUsers = (searchParameters?: GirlFriday.SearchParameters) => {
  const [users, setUsers] = useState([] as GirlFriday.User[])
  const [page, setPage] = useState(DEFAULT_PARAMS_OF_USER_LIST.page)

  const params = useMemo(
    () =>
      searchParameters
        ? searchParameters
        : { ...DEFAULT_PARAMS_OF_USER_LIST, page },
    [page, searchParameters],
  )

  const increasePage = useCallback(() => {
    setPage(page + 1)
  }, [page])

  useEffect(() => {
    httpClient
      .get('users/all', {
        params,
      })
      .then((response) => {
        setUsers([...users, ...response.data.data])
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, params])

  return { users, increasePage }
}
