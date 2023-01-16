import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useUsers = (searchParameters: GirlFriday.SearchParameters) => {
  const [searchResults, setSearchResults] = useState(
    [] as GirlFriday.SearchResult[],
  )

  useEffect(() => {
    httpClient
      .get('users/all', {
        params: {
          ...searchParameters,
        },
      })
      .then((response) => {
        setSearchResults(response.data.data)
      })
  }, [searchParameters])

  return { searchResults }
}
