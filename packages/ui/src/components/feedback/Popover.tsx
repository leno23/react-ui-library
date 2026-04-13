import { forwardRef, type HTMLAttributes, type MutableRefObject, type ReactNode, useState, useRef, useCallback } from 'react'
import { cn } from '../../utils/cn'
import { setRef } from '../../utils/setRef'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEscapeKey } from '../../hooks/useEscapeKey'

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  trigger: ReactNode
  content: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(
  {
    className,
    trigger,
    content,
    open: controlledOpen,
    defaultOpen = false,
    onOpen,
    onClose,
    ...props
  },
  ref,
) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : innerOpen
  const rootRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement | null>

  const setOpen = useCallback(
    (next: boolean) => {
      if (next === open) return
      if (!isControlled) setInnerOpen(next)
      if (next) onOpen?.()
      else onClose?.()
    },
    [isControlled, onClose, onOpen, open],
  )

  const handleToggle = () => setOpen(!open)

  useClickOutside(rootRef, () => setOpen(false), open)
  useEscapeKey(() => setOpen(false), open)

  return (
    <div
      ref={(node) => {
        rootRef.current = node
        setRef(ref, node)
      }}
      className={cn('relative inline-flex', className)}
      {...props}
    >
      <button type="button" onClick={handleToggle} className="inline-flex">
        {trigger}
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-40 mt-2 min-w-48 rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {content}
        </div>
      ) : null}
    </div>
  )
})
