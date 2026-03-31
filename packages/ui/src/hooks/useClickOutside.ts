import { useEffect, type RefObject } from 'react'

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') {
      return
    }

    const listener = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (!target || !ref.current || ref.current.contains(target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [enabled, handler, ref])
}
