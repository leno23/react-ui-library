import { forwardRef, type HTMLAttributes, useEffect, useId, useRef } from 'react'
import { Portal } from '../../utils/portal'
import { cn } from '../../utils/cn'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useClickOutside } from '../../hooks/useClickOutside'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
  title?: string
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { className, open = false, onClose, title, children, ...props },
  _ref,
) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const lastActiveElementRef = useRef<HTMLElement | null>(null)
  useEscapeKey(() => onClose?.(), open)
  useClickOutside(panelRef, () => onClose?.(), open)

  useEffect(() => {
    if (!open) return

    lastActiveElementRef.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()

    return () => {
      lastActiveElementRef.current?.focus()
    }
  }, [open])

  if (!open) {
    return null
  }

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" aria-hidden={!open}>
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          className={cn('w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-slate-900', className)}
          {...props}
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 id={titleId} className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
            <button ref={closeButtonRef} onClick={onClose} className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Close modal">
              ✕
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  )
})
