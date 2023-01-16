/** @jsxImportSource @emotion/react */
import React, { useContext, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext, Input, Button } from 'src/components'
import { homeContainer } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const {
    state: { isMobile },
    actions: { setSearchParameters },
  } = useContext(AppContext)
  const [keyword, setKeyword] = useState('')
  const [pageSize, setPageSize] = useState(30)

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

    navigate('/search-result')
  }, [keyword, navigate, pageSize, setSearchParameters])

  return (
    <div css={homeContainer}>
      <div className="home-title">Search</div>
      <Input value={keyword} onChange={onChange} />
      <div className="home-title"># Of Results Per Page</div>
      <Button onClick={onClick} />
    </div>
  )
}

export default Home
