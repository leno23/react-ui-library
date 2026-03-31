import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number
  gap?: number
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { className, cols = 3, gap = 12, style, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap, ...style }}
      className={cn('grid', className)}
      {...props}
    />
  )
})
