/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import InfiniteScroll from 'react-infinite-scroll-component'
import { AppContext, Button } from 'src/components'
import { useUsers, useStorage } from 'src/hooks'
import { STORAGE_KEY_OF_SEARCH_PARAMETERS, FALLBACK_IMAGE } from 'src/settings'
import { searchResultContainer } from './styles'

const SearchResult = () => {
  const navigate = useNavigate()
  const {
    state: { isMobileLayout, searchParameters, layout },
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

  const { users, increasePage } = useUsers(searchParameters)

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

  const backToHomePage = useCallback(() => {
    navigate('/home')
  }, [navigate])

  return (
    <div css={searchResultContainer[layout]}>
      {isMobileLayout ? (
        <div className="search-result-header">
          <div className="search-result-main-header">
            <KeyboardArrowLeftIcon onClick={backToHomePage} />
            <span>Home Page</span>
          </div>
          <div className="search-result-sub-header">Results</div>
        </div>
      ) : (
        <div className="search-result-header">
          <KeyboardArrowLeftIcon onClick={backToHomePage} />
          <span>Results</span>
        </div>
      )}
      <div className="search-result-content">
        <InfiniteScroll
          dataLength={users.length}
          next={increasePage}
          hasMore={true}
          loader={null}
        >
          {Content}
        </InfiniteScroll>
      </div>
      {!isMobileLayout && (
        <Button onClick={onClick} text="more" layout={layout} />
      )}
    </div>
  )
}

export default SearchResult
