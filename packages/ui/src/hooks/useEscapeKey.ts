import { useEffect, useRef } from 'react'

export function useEscapeKey(handler: () => void, enabled = true) {
  const savedHandler = useRef(handler)
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!enabled || typeof document === 'undefined') {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        savedHandler.current()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [enabled])
}
