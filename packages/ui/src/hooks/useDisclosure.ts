import { useCallback } from 'react'
import { useControllableState } from '../utils/useControllableState'

export interface UseDisclosureOptions {
  open?: boolean
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export function useDisclosure(options: UseDisclosureOptions) {
  const { open, defaultOpen = false, onOpen, onClose } = options
  const [isOpen, setIsOpen] = useControllableState<boolean>({
    value: open,
    defaultValue: defaultOpen,
    onChange: (nextOpen) => {
      if (nextOpen) {
        onOpen?.()
      } else {
        onClose?.()
      }
    },
  })

  const show = useCallback(() => setIsOpen(true), [setIsOpen])
  const hide = useCallback(() => setIsOpen(false), [setIsOpen])
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])

  return {
    open: isOpen,
    setOpen: setIsOpen,
    show,
    hide,
    toggle,
  }
}
