import { forwardRef, useState, useRef, useCallback, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface SplitterPanel {
  content: ReactNode
  defaultSize?: number
  min?: number
  max?: number
}

export interface SplitterProps extends HTMLAttributes<HTMLDivElement> {
  panels: SplitterPanel[]
  direction?: 'horizontal' | 'vertical'
  onResize?: (sizes: number[]) => void
}

export const Splitter = forwardRef<HTMLDivElement, SplitterProps>(function Splitter(
  { className, panels, direction = 'horizontal', onResize, ...props },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isHorizontal = direction === 'horizontal'

  const initSizes = panels.map((p) => p.defaultSize ?? 100 / panels.length)
  const [sizes, setSizes] = useState(initSizes)

  const handleDrag = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault()
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const totalPx = isHorizontal ? rect.width : rect.height

      const startPos = isHorizontal ? e.clientX : e.clientY

      const startSizes = [...sizes]

      const onMove = (ev: MouseEvent) => {
        const currentPos = isHorizontal ? ev.clientX : ev.clientY
        const deltaPx = currentPos - startPos
        const deltaPct = (deltaPx / totalPx) * 100

        const newSizes = [...startSizes]
        let left = startSizes[index] + deltaPct
        let right = startSizes[index + 1] - deltaPct

        const pLeft = panels[index]
        const pRight = panels[index + 1]
        if (pLeft.min !== undefined && left < pLeft.min) { left = pLeft.min; right = startSizes[index] + startSizes[index + 1] - left }
        if (pLeft.max !== undefined && left > pLeft.max) { left = pLeft.max; right = startSizes[index] + startSizes[index + 1] - left }
        if (pRight.min !== undefined && right < pRight.min) { right = pRight.min; left = startSizes[index] + startSizes[index + 1] - right }
        if (pRight.max !== undefined && right > pRight.max) { right = pRight.max; left = startSizes[index] + startSizes[index + 1] - right }

        newSizes[index] = left
        newSizes[index + 1] = right
        setSizes(newSizes)
        onResize?.(newSizes)
      }

      const onUp = () => {
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
      }
      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
    },
    [sizes, panels, isHorizontal, onResize],
  )

  return (
    <div
      ref={(node) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }}
      className={cn(
        'flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700',
        isHorizontal ? 'flex-row' : 'flex-col',
        className,
      )}
      {...props}
    >
      {panels.map((panel, i) => (
        <div key={i} className="flex" style={{ [isHorizontal ? 'width' : 'height']: `${sizes[i]}%`, flexDirection: isHorizontal ? 'row' : 'column' }}>
          <div className="min-h-0 min-w-0 flex-1 overflow-auto">{panel.content}</div>
          {i < panels.length - 1 ? (
            <div
              role="separator"
              onMouseDown={(e) => handleDrag(i, e)}
              className={cn(
                'shrink-0 bg-slate-200 transition-colors hover:bg-brand-400 dark:bg-slate-700 dark:hover:bg-brand-500',
                isHorizontal ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize',
              )}
            />
          ) : null}
        </div>
      ))}
    </div>
  )
})
