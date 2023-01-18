import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useFriends = (searchParameters: GirlFriday.SearchParameters) => {
  const [firends, setFirends] = useState([] as GirlFriday.Firend[])

  useEffect(() => {
    httpClient
      .get('users/friends', {
        params: {
          ...searchParameters,
          keyword: undefined,
        },
      })
      .then((response) => {
        setFirends(response.data.data)
      })
  }, [searchParameters])

  return { firends }
}
