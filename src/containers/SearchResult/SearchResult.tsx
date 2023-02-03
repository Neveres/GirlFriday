/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import InfiniteScroll from 'react-infinite-scroll-component'
import { AppContext, Button, MobileHeader, Spinner } from 'src/components'
import { useUsers, useStorage } from 'src/hooks'
import { STORAGE_KEY_OF_SEARCH_PARAMETERS, FALLBACK_IMAGE } from 'src/settings'
import { PagePath } from 'src/Routes'
import { searchResultContainer } from './styles'

const NUMBER_OF_MEMBER_IN_EACH_ROW = 3
const SearchResult = () => {
  const navigate = useNavigate()
  const {
    state: { isMobileLayout, searchParameters, layout },
    actions: { setSearchParameters },
  } = useContext(AppContext)

  const { get } = useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true)
  const searchParametersFromStorage: GirlFriday.SearchParameters = get()

  let params = searchParameters
  if (searchParametersFromStorage) {
    if (
      searchParametersFromStorage.keyword !== params.keyword ||
      searchParametersFromStorage.pageSize !== params.pageSize
    ) {
      params = searchParametersFromStorage

      setSearchParameters({
        ...searchParametersFromStorage,
        page: 1,
      })
    }
  }

  const { users, increasePage, hasMore } = useUsers(params)

  const imageOnErrorHandler = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = FALLBACK_IMAGE
      event.currentTarget.className = 'error'
    },
    [],
  )

  const Content = useMemo(() => {
    const elements = users.map(({ id, name, username, avater }) => (
      <div key={id} className="search-result-item">
        <img
          className="search-result-item-avater"
          src={avater}
          onError={imageOnErrorHandler}
        />
        <div className="search-result-item-name">{name}</div>
        <div className="search-result-item-username">by {username}</div>
      </div>
    ))

    if (isMobileLayout) {
      return elements
    } else {
      const rows: Array<typeof elements[0]>[] = []
      let indexOfRow = 0
      elements.forEach((element, index) => {
        rows[indexOfRow] = rows[indexOfRow] || []
        rows[indexOfRow].push(element)
        if (index % NUMBER_OF_MEMBER_IN_EACH_ROW === 2) {
          indexOfRow++
        }
      })

      return rows.map((row, index) => (
        <div className="search-result-row" key={`row-${index}`}>
          {row}
        </div>
      ))
    }
  }, [imageOnErrorHandler, isMobileLayout, users])

  const onClick = useCallback(() => {
    increasePage()
  }, [increasePage])

  const backToHomePage = useCallback(() => {
    navigate(PagePath.Home)
  }, [navigate])

  const Loader = useMemo(() => (hasMore ? <Spinner /> : null), [hasMore])

  return (
    <div css={searchResultContainer[layout]}>
      {isMobileLayout ? (
        <>
          <MobileHeader />
          <div className="mobile-page-title">Results</div>
        </>
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
          hasMore={hasMore}
          loader={Loader}
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
