import React, { useContext } from 'react'
import { AppContext } from 'src/components'
import { useUsers, useStorage } from 'src/hooks'
import { STORAGE_KEY_OF_SEARCH_PARAMETERS } from 'src/settings'

const SearchResult = () => {
  const {
    state: { isMobile, searchParameters },
  } = useContext(AppContext)
  const { get } = useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true)

  const searchParametersFromStorage = get()

  let parameters = searchParameters
  if (searchParameters.keyword) {
    parameters = searchParameters
  } else if (searchParametersFromStorage.keyword) {
    parameters = searchParametersFromStorage
  }

  const { searchResults } = useUsers(parameters)

  return (
    <div>
      <div>Results</div>
      <div>{JSON.stringify(searchResults)}</div>
    </div>
  )
}

export default SearchResult
