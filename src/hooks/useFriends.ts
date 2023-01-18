import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useFriends = (searchParameters: GirlFriday.SearchParameters) => {
  const [friends, setFirends] = useState([] as GirlFriday.User[])

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

  return { friends }
}
