/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { AppContext } from 'src/components'
import { useTags } from 'src/hooks'
import { tagsContainer } from './styles'

const Tags = () => {
  const navigate = useNavigate()
  const {
    state: { isMobileLayout, layout },
  } = useContext(AppContext)

  const { tags } = useTags()

  const backToHomePage = useCallback(() => {
    navigate('/home')
  }, [navigate])

  const Content = useMemo(
    () =>
      tags.map(({ name, count, id }) => (
        <div key={id} className="tag-container">
          <div className="tag-big-title">
            <div className="tag-big-title-name">{name}</div>
          </div>
          <div className="tag-sub-title">
            <div className="tag-sub-title-name">{name}</div>
            <div className="tag-sub-title-count">{count} Results</div>
          </div>
        </div>
      )),
    [tags],
  )

  return (
    <div css={tagsContainer[layout]}>
      {isMobileLayout ? (
        <div className="tags-header">
          <KeyboardArrowLeftIcon onClick={backToHomePage} />
          <span>Home Page</span>
        </div>
      ) : null}
      <div className="page-title">Tags</div>
      <div>{Content}</div>
    </div>
  )
}

export default Tags
