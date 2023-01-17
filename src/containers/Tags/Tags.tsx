/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo } from 'react'
import { AppContext } from 'src/components'
import { useTags } from 'src/hooks'
import { tagsContainer } from './styles'

const Tags = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  const { tags } = useTags()

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
    <>
      <div className="page-title">Tags</div>
      <div css={tagsContainer}>{Content}</div>
    </>
  )
}

export default Tags
