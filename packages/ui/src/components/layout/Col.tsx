import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number
  offset?: number
}

export const Col = forwardRef<HTMLDivElement, ColProps>(function Col(
  { className, span = 12, offset = 0, style, ...props },
  ref,
) {
  const width = `${(span / 12) * 100}%`
  const marginLeft = `${(offset / 12) * 100}%`

  return <div ref={ref} style={{ width, marginLeft, ...style }} className={cn('min-w-0', className)} {...props} />
})
