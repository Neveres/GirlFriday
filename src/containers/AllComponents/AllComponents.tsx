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
        <Button text="Button" layout="mobile" />
        <br />
        <br />
        <Button text="Button" layout="desktop" />
        <br />
        <br />
        <div className="outlined-button-wrapper">
          <Button text="Button" type="outlined" />
        </div>

        <br />
        <div className="contained-button-wrapper">
          <Button text="Button" type="contained" />
        </div>
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
        <br />

        <Slider value={15} setValue={() => {}} layout={'mobile'} />
        <br />
        <Slider value={50} setValue={() => {}} layout={'mobile'} />
        <br />
      </div>
    </div>
  )
}

export default AllComponents
