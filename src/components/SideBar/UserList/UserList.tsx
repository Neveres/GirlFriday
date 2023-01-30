/** @jsxImportSource @emotion/react */
import React, { useMemo, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { FALLBACK_IMAGE } from 'src/settings'
import { userListContainer } from './styles'

interface IUserList {
  users: GirlFriday.User[]
  fetchMoreUser: () => void
}

const UserList: React.FC<IUserList> = ({ users, fetchMoreUser }) => {
  const imageOnErrorHandler = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = FALLBACK_IMAGE
      event.currentTarget.className = 'error'
    },
    [],
  )

  const Content = useMemo(
    () =>
      users.map(({ id, avater, name, username, isFollowing }) => (
        <div key={id} className="user-container">
          <img
            className="user-avater"
            src={avater}
            onError={imageOnErrorHandler}
          />
          <div className="user-info-container">
            <div className="user-name-container">
              <div className="user-name">{name}</div>
              <div className="user-username">@{username}</div>
            </div>
            <div
              className={`user-status ${isFollowing ? 'follow' : 'not-follow'}`}
            >
              {isFollowing ? (
                <div className="user-status-follow">Following</div>
              ) : (
                <div className="user-status-not-follow">Follow</div>
              )}
            </div>
          </div>
        </div>
      )),
    [imageOnErrorHandler, users],
  )

  return (
    <InfiniteScroll
      css={userListContainer}
      dataLength={users.length}
      next={fetchMoreUser}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {Content}
    </InfiniteScroll>
  )
}

export default UserList
