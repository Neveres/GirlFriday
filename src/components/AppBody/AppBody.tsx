/** @jsxImportSource @emotion/react */
import React from 'react'
import { appBodyContainer } from './styles'

export interface IAppBodyProps {
  pathname: string
  children?: React.ReactElement
}

const AppBody: React.FC<IAppBodyProps> = ({ children }) => (
  <div css={appBodyContainer}>{children}</div>
)

export default AppBody
