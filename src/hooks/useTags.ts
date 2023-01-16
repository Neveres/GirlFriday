import { useState, useEffect } from 'react'
import { httpClient } from 'src/libraries'

export const useTags = () => {
  const [tags, setTags] = useState([] as GirlFriday.Tag[])

  useEffect(() => {
    httpClient.get('tags').then((response) => {
      setTags(response.data)
    })
  }, [])

  return { tags }
}
