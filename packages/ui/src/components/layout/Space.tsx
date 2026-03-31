import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical'
  size?: number
  wrap?: boolean
}

export const Space = forwardRef<HTMLDivElement, SpaceProps>(function Space(
  { className, direction = 'horizontal', size = 8, wrap = true, style, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{ gap: size, ...style }}
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-row items-center' : 'flex-col',
        direction === 'horizontal' && wrap ? 'flex-wrap' : 'flex-nowrap',
        className,
      )}
      {...props}
    />
  )
})
