import React, { useContext } from 'react'
import { AppContext } from 'src/components'
import { useFriends } from 'src/hooks'

const Following = () => {
  const {
    state: { searchParameters },
  } = useContext(AppContext)

  const { firends } = useFriends(searchParameters)

  return <div>{JSON.stringify(firends)}</div>
}

export default Following
