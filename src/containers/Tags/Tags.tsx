import React, { useContext } from 'react'
import { AppContext } from 'src/components'
import { useTags } from 'src/hooks'

const Tags = () => {
  const {
    state: { isMobile },
  } = useContext(AppContext)

  const { tags } = useTags()

  return (
    <>
      <div>Tags</div>
      <div>{JSON.stringify(tags)}</div>
    </>
  )
}

export default Tags
