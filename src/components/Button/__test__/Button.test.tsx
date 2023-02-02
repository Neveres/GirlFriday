import React from 'react'
import { create } from 'react-test-renderer'
import { Button } from 'src/components'

describe('Button', () => {
  const props = {
    onClick: jest.fn(),
    text: 'text',
    layout: 'desktop',
  }

  test('should render well under desktop layout', () => {
    const testRenderer = create(<Button {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('should render well under mobile layout', () => {
    props.layout = 'mobile'
    const testRenderer = create(<Button {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('type "contained" should render well', () => {
    const testRenderer = create(<Button {...props} type="contained" />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('type "outlined" should render well', () => {
    const testRenderer = create(<Button {...props} type="outlined" />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
