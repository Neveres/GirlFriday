import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import { NavBar, AppContext } from 'src/components'
import { PagePath } from 'src/Routes'

describe('NavBar', () => {
  const paths = Object.values(PagePath).map((value) => value)

  test('should render well under desktop layout', () => {
    for (let i = 0, maxI = paths.length - 1; i < maxI; i++) {
      const testRenderer = create(
        <BrowserRouter>
          <AppContext.Provider
            value={
              {
                state: {
                  isMobileLayout: false,
                },
              } as any
            }
          >
            <NavBar pathname={paths[i]} />
          </AppContext.Provider>
        </BrowserRouter>,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    }
  })

  test('should render well under mobile layout', () => {
    for (let i = 0, maxI = paths.length - 1; i < maxI; i++) {
      const testRenderer = create(
        <BrowserRouter>
          <AppContext.Provider
            value={
              {
                state: {
                  isMobileLayout: true,
                },
              } as any
            }
          >
            <NavBar pathname={paths[i]} />
          </AppContext.Provider>
        </BrowserRouter>,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    }
  })
})
