import { useCallback, useRef, useEffect } from 'react'

const useAnimationFrame = (enabled: boolean, callback: () => void) => {
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null,
  )

  const animate = useCallback(function animateFrame() {
    callback()
    requestRef.current = requestAnimationFrame(animateFrame)
  }, [callback])

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate)

      return () => {
        if (requestRef.current !== null) {
          cancelAnimationFrame(requestRef.current)
        }
      }
    }
  }, [enabled, animate])
}

export default useAnimationFrame
