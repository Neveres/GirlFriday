/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { AppContext, Button } from 'src/components'
import { useUsers, useStorage } from 'src/hooks'
import { STORAGE_KEY_OF_SEARCH_PARAMETERS, FALLBACK_IMAGE } from 'src/settings'
import { searchResultContainer } from './styles'

const SearchResult = () => {
  const {
    state: { isMobile, searchParameters },
    actions: { setSearchParameters },
  } = useContext(AppContext)

  const { get } = useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true)

  if (!searchParameters.keyword) {
    const searchParametersFromStorage = get()
    if (searchParametersFromStorage.keyword) {
      setSearchParameters({
        ...searchParametersFromStorage,
        page: 1,
      })
    }
  }

  const { users, increasePage } = useUsers(searchParameters, true)

  const imageOnErrorHandler = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = FALLBACK_IMAGE
      event.currentTarget.className = 'error'
    },
    [],
  )

  const Content = useMemo(
    () =>
      users.map(({ id, name, username, avater }) => (
        <div key={id} className="search-result-item">
          <img
            className="search-result-item-avater"
            src={avater}
            onError={imageOnErrorHandler}
          />
          <div className="search-result-item-name">{name}</div>
          <div className="search-result-item-username">by {username}</div>
        </div>
      )),
    [imageOnErrorHandler, users],
  )

  const onClick = useCallback(() => {
    increasePage()
  }, [increasePage])

  return (
    <div css={searchResultContainer}>
      <div className="search-result-header">
        <KeyboardArrowLeftIcon />
        <span>Results</span>
      </div>
      <div className="search-result-content">{Content}</div>
      <Button onClick={onClick} text="more" />
    </div>
  )
}

export default SearchResult
