import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  align?: 'start' | 'center' | 'end' | 'stretch'
  wrap?: boolean
}

export const Row = forwardRef<HTMLDivElement, RowProps>(function Row(
  { className, gap = 12, justify = 'start', align = 'stretch', wrap = true, style, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{ gap, ...style }}
      className={cn(
        'flex',
        wrap ? 'flex-wrap' : 'flex-nowrap',
        {
          'justify-start': justify === 'start',
          'justify-center': justify === 'center',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'items-stretch': align === 'stretch',
        },
        className,
      )}
      {...props}
    />
  )
})
