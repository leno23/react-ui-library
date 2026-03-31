import { useEffect } from 'react'

export function useEscapeKey(handler: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [enabled, handler])
}
