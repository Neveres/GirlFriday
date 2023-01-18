import React, { useContext } from 'react'
import { AppContext } from 'src/components'
import { useUsers } from 'src/hooks'

const Followers = () => {
  const {
    state: { searchParameters },
  } = useContext(AppContext)

  const { searchResults } = useUsers(searchParameters)

  return <div>{JSON.stringify(searchResults)}</div>
}

export default Followers
