/** @jsxImportSource @emotion/react */
import React from 'react'
import { buttonContainer } from './styles'

interface IOutlined {
  text: string
}

const Outlined: React.FC<IOutlined> = ({ text }) => (
  <div css={buttonContainer}>
    <span className="button-text">{text}</span>
  </div>
)

export default Outlined
