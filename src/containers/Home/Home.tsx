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
    state: { isMobile, searchParameters },
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
  }, [keyword, navigate, pageSize, set, setSearchParameters])

  return (
    <div css={isMobile ? homeContainer.mobile : homeContainer.desktop}>
      <div className="search-container">
        <div className="search-header">Search</div>
        <Input value={keyword} onChange={onChange} isMobile={isMobile} />
      </div>
      <div className="page-size-container">
        <div className="page-size-title"># Of Results Per Page</div>
        <div className="page-size-status">
          <span className="page-size-status-count">30 </span>
          {/* <span className="page-size-status-count">{pageSize} </span> */}
          <span className="page-size-status-unit">results</span>
        </div>
        <Slider value={pageSize} setValue={setPageSize} isMobile={isMobile} />
      </div>
      <Button onClick={onClick} text="search" isMobile={isMobile} />
    </div>
  )
}

export default Home
