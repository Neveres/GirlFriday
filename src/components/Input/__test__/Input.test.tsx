import React from 'react'
import { create } from 'react-test-renderer'
import { Input } from 'src/components'

describe('Input', () => {
  const props = {
    onChange: jest.fn(),
    value: 'value',
    layout: 'desktop',
  }

  test('should render well under desktop layout', () => {
    const testRenderer = create(<Input {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('should render well under mobile layout', () => {
    props.layout = 'mobile'
    const testRenderer = create(<Input {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
