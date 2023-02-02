/** @jsxImportSource @emotion/react */
import React, { useMemo, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Spinner, Button } from 'src/components'
import { FALLBACK_IMAGE } from 'src/settings'
import { userListContainer } from './styles'

interface IUserList {
  users: GirlFriday.User[]
  fetchMoreUser: () => void
  hasMore: boolean
}

const UserList: React.FC<IUserList> = ({ users, fetchMoreUser, hasMore }) => {
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
              className={`user-status ${
                isFollowing ? 'following' : 'unfollow'
              }`}
            >
              {isFollowing ? (
                <Button text="Following" type="contained" />
              ) : (
                <Button text="Follow" type="outlined" />
              )}
            </div>
          </div>
        </div>
      )),
    [imageOnErrorHandler, users],
  )

  const Loader = useMemo(() => (hasMore ? <Spinner /> : null), [hasMore])

  return (
    <InfiniteScroll
      css={userListContainer}
      dataLength={users.length}
      next={fetchMoreUser}
      hasMore={hasMore}
      loader={Loader}
    >
      {Content}
    </InfiniteScroll>
  )
}

export default UserList
