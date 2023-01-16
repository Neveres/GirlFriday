import React, { useContext } from 'react'
import { AppContext } from 'src/components'
import { useUsers } from 'src/hooks'

const SearchResult = () => {
  const {
    state: { isMobile, searchParameters },
  } = useContext(AppContext)

  const { searchResults } = useUsers(searchParameters)

  return (
    <div>
      <div>Results</div>
      <div>{JSON.stringify(searchResults)}</div>
    </div>
  )
}

export default SearchResult
