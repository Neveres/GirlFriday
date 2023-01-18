import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useUsers = (
  searchParameters: GirlFriday.SearchParameters,
  shouldFilter = false,
) => {
  const [searchResults, setSearchResults] = useState(
    [] as GirlFriday.SearchResult[],
  )

  useEffect(() => {
    httpClient
      .get('users/all', {
        params: {
          ...searchParameters,
          keyword: shouldFilter ? searchParameters.keyword : undefined,
        },
      })
      .then((response) => {
        setSearchResults(response.data.data)
      })
  }, [searchParameters, shouldFilter])

  return { searchResults }
}
