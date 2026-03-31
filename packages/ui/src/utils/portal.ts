import { type ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  container?: HTMLElement | null
}

export function Portal({ children, container }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted || typeof document === 'undefined') {
    return null
  }

  return createPortal(children, container ?? document.body)
}
