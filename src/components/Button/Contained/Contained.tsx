/** @jsxImportSource @emotion/react */
import React from 'react'
import { buttonContainer } from './styles'

interface IContained {
  text: string
}

const Contained: React.FC<IContained> = ({ text }) => (
  <div css={buttonContainer}>
    <span className="button-text">{text}</span>
  </div>
)

export default Contained
