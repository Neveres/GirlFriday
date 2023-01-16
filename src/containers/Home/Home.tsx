/** @jsxImportSource @emotion/react */
import React, { useContext, useRef } from 'react'
import { AppContext, Input } from 'src/components'
import { homeContainer } from './styles'

const Home = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  const inputRef = useRef(null)

  return (
    <div css={homeContainer}>
      <div className="home-title">Search</div>
      <Input inputRef={inputRef} />
      <div className="home-title"># Of Results Per Page</div>
    </div>
  )
}

export default Home
