import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  count?: number
  dot?: boolean
  children?: ReactNode
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, count = 0, dot = false, children, ...props },
  ref,
) {
  return (
    <span ref={ref} className={cn('relative inline-flex', className)} {...props}>
      {children}
      <span className={cn('absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white', dot ? 'h-2 w-2 p-0' : 'min-h-5 min-w-5 px-1')}>
        {dot ? null : count}
      </span>
    </span>
  )
})
