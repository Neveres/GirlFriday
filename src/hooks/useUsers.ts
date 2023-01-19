import { useState, useEffect, useCallback } from 'react'
import { httpClient } from 'src/libraries'

export const useUsers = (
  searchParameters: GirlFriday.SearchParameters,
  shouldFilter = false,
) => {
  const [users, setUsers] = useState([] as GirlFriday.User[])
  const [page, setPage] = useState(searchParameters.page)

  const increasePage = useCallback(() => {
    setPage(page + 1)
  }, [page])

  useEffect(() => {
    httpClient
      .get('users/all', {
        params: {
          ...searchParameters,
          page,
          keyword: shouldFilter ? searchParameters.keyword : undefined,
        },
      })
      .then((response) => {
        setUsers([...users, ...response.data.data])
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchParameters, shouldFilter])

  return { users, increasePage }
}
