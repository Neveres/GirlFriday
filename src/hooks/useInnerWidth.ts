import { useEffect, useCallback } from 'react'
import { threshold, Layout } from 'src/settings'

export const useInnerWidth = ({
  setMobileLayout,
  setSideBar,
  setLayout,
}: {
  setMobileLayout: (isMobileLayout: boolean) => void
  setSideBar: (showSideBar: boolean) => void
  setLayout: (layout: string) => void
}) => {
  const handleWindowSizeChange = useCallback(() => {
    const isMobileLayout = window.innerWidth <= threshold.mobile
    setMobileLayout(isMobileLayout)
    setSideBar(window.innerWidth >= threshold.sideBar)
    setLayout(isMobileLayout ? Layout.Mobile : Layout.Desktop)
  }, [setLayout, setMobileLayout, setSideBar])

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
