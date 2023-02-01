/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo } from 'react'
import { AppContext, MobileHeader, LoadingCircular } from 'src/components'
import { useTags } from 'src/hooks'
import { tagsContainer } from './styles'

const Tags = () => {
  const {
    state: { isMobileLayout, layout },
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
    <div css={tagsContainer[layout]}>
      {isMobileLayout && <MobileHeader />}
      <div className={isMobileLayout ? 'mobile-page-title' : 'page-title'}>
        Tags
      </div>
      <div>{Content.length ? Content : <LoadingCircular />}</div>
    </div>
  )
}

export default Tags
