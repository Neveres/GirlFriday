/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import { AppContext } from 'src/components'
import { useUsers } from 'src/hooks'
import { FALLBACK_IMAGE } from 'src/settings'
import { followersContainer } from './styles'

const Followers = () => {
  const {
    state: { searchParameters },
  } = useContext(AppContext)

  const { searchResults } = useUsers(searchParameters)

  const imageOnErrorHandler = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = FALLBACK_IMAGE
      event.currentTarget.className = 'error'
    },
    [],
  )

  const Content = useMemo(
    () =>
      searchResults.map(({ id, avater, name, username, isFollowing }) => (
        <div key={id} className="follower-container">
          <img
            className="follower-avater"
            src={avater}
            onError={imageOnErrorHandler}
          />
          <div className="follower-info-container">
            <div className="follower-name-container">
              <div className="follower-name">{name}</div>
              <div className="follower-username">{username}</div>
            </div>
            <div
              className={`follower-status ${
                isFollowing ? 'follow' : 'not-follow'
              }`}
            >
              {isFollowing ? (
                <div className="follower-status-follow">Following</div>
              ) : (
                <div className="follower-status-not-follow">Follow</div>
              )}
            </div>
          </div>
        </div>
      )),
    [imageOnErrorHandler, searchResults],
  )

  return <div css={followersContainer}>{Content}</div>
}

export default Followers
