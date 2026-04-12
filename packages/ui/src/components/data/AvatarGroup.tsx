import { forwardRef, type HTMLAttributes, Children, type ReactElement } from 'react'
import { cn } from '../../utils/cn'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(function AvatarGroup(
  { className, max, size = 'md', children, ...props },
  ref,
) {
  const items = Children.toArray(children) as ReactElement[]
  const visible = max && items.length > max ? items.slice(0, max) : items
  const overflow = max && items.length > max ? items.length - max : 0

  const sizePx = size === 'sm' ? 32 : size === 'md' ? 40 : 48
  const overlapPx = sizePx * 0.25

  return (
    <div ref={ref} className={cn('inline-flex items-center', className)} {...props}>
      {visible.map((child, i) => (
        <div
          key={i}
          className="relative rounded-full ring-2 ring-white dark:ring-slate-900"
          style={{ marginLeft: i > 0 ? -overlapPx : 0, zIndex: visible.length - i }}
        >
          {child}
        </div>
      ))}
      {overflow > 0 ? (
        <div
          className={cn(
            'relative flex items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600 ring-2 ring-white dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-900',
          )}
          style={{
            marginLeft: -overlapPx,
            zIndex: 0,
            width: sizePx,
            height: sizePx,
          }}
        >
          +{overflow}
        </div>
      ) : null}
    </div>
  )
})
