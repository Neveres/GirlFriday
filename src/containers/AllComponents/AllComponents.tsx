/** @jsxImportSource @emotion/react */
import React from 'react'
import { Input, Slider, Button } from 'src/components'
import { componentsContainer } from './styles'

const AllComponents = () => {
  return (
    <div css={componentsContainer}>
      <h1>Component</h1>
      <div className="componentContainer">
        <div className="component-type">Button</div>
        <Button onClick={() => {}} text="search" layout={'desktop'} />
      </div>
      <div className="componentContainer">
        <div className="component-type">Input</div>
        <Input value={''} onChange={() => {}} layout={'desktop'} />
      </div>
      <div className="componentContainer">
        <div className="component-type">Slider</div>
        <Slider value={15} setValue={() => {}} layout={'desktop'} />
        <br />
        <Slider value={50} setValue={() => {}} layout={'desktop'} />
      </div>
    </div>
  )
}

export default AllComponents