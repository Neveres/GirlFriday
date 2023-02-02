/** @jsxImportSource @emotion/react */
import React, { useContext, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext, Input, Button, Slider } from 'src/components'
import { useStorage } from 'src/hooks'
import { STORAGE_KEY_OF_SEARCH_PARAMETERS } from 'src/settings'
import { homeContainer } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const {
    state: { isMobileLayout, searchParameters, layout },
    actions: { setSearchParameters },
  } = useContext(AppContext)
  const [keyword, setKeyword] = useState('')
  const [pageSize, setPageSize] = useState(searchParameters.pageSize)
  const { set } = useStorage(STORAGE_KEY_OF_SEARCH_PARAMETERS, true)

  const onChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(value)
    },
    [],
  )

  const onClick = useCallback(() => {
    if (keyword) {
      setSearchParameters({
        keyword,
        page: 1,
        pageSize,
      })

      set({
        keyword,
        page: 1,
        pageSize,
      })

      navigate('/search-result')
    }
  }, [keyword, navigate, pageSize, set, setSearchParameters])

  return (
    <div css={homeContainer[layout]}>
      <div className="search-container">
        <div className="search-header">Search</div>
        <Input value={keyword} onChange={onChange} layout={layout} />
      </div>
      <div className="page-size-container">
        <div className="page-size-title"># Of Results Per Page</div>
        <div className="page-size-status">
          <span className="page-size-status-count">{pageSize} </span>
          <span className="page-size-status-unit">{`result${
            isMobileLayout ? '' : 's'
          }`}</span>
        </div>
        <Slider value={pageSize} setValue={setPageSize} layout={layout} />
      </div>
      {isMobileLayout && <hr className="mobile-divider"></hr>}
      <Button onClick={onClick} text="search" layout={layout} />
    </div>
  )
}

export default Home
