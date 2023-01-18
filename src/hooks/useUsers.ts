import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useUsers = (
  searchParameters: GirlFriday.SearchParameters,
  shouldFilter = false,
) => {
  const [users, setUsers] = useState([] as GirlFriday.User[])

  useEffect(() => {
    httpClient
      .get('users/all', {
        params: {
          ...searchParameters,
          keyword: shouldFilter ? searchParameters.keyword : undefined,
        },
      })
      .then((response) => {
        setUsers(response.data.data)
      })
  }, [searchParameters, shouldFilter])

  return { users }
}
