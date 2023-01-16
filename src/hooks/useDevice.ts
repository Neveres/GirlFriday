import { useEffect, useCallback } from 'react'

const THRESHOLD = 768
export const useDevice = ({
  setDevice,
}: {
  setDevice: (isMobile: boolean) => void
}) => {
  const handleWindowSizeChange = useCallback(() => {
    setDevice(window.innerWidth <= THRESHOLD)
  }, [setDevice])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [handleWindowSizeChange])

  return {}
}
