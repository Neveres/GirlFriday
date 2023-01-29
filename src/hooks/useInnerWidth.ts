import { useEffect, useCallback } from 'react'
import { threshold, Layout } from 'src/settings'

export const useInnerWidth = ({
  setMobile,
  setSideBar,
  setLayout,
}: {
  setMobile: (isMobile: boolean) => void
  setSideBar: (showSideBar: boolean) => void
  setLayout: (layout: string) => void
}) => {
  const handleWindowSizeChange = useCallback(() => {
    const isMobile = window.innerWidth <= threshold.mobile
    setMobile(isMobile)
    setSideBar(window.innerWidth >= threshold.sideBar)
    setLayout(isMobile ? Layout.Mobile : Layout.Desktop)
  }, [setLayout, setMobile, setSideBar])

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
