import React from 'react'

export interface IAppBodyProps {
  pathname: string
  children?: React.ReactElement
}

const AppBody: React.FC<IAppBodyProps> = (props) => {
  const { children } = props

  return <div>{children}</div>
}

export default AppBody
