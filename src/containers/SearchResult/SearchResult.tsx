import React, { useContext } from 'react'
import { AppContext } from 'src/components'

const SearchResult = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  return <div>SearchResult</div>
}

export default SearchResult
