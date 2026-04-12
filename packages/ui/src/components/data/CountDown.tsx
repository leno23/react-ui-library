import { forwardRef, useState, useEffect, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface CountDownProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  format?: string
  onFinish?: () => void
  prefix?: string
  suffix?: string
  title?: string
}

function formatDuration(ms: number, format: string): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const d = Math.floor(totalSeconds / 86400)
  const h = Math.floor((totalSeconds % 86400) / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  return format
    .replace('DD', String(d).padStart(2, '0'))
    .replace('D', String(d))
    .replace('HH', String(h).padStart(2, '0'))
    .replace('H', String(h))
    .replace('mm', String(m).padStart(2, '0'))
    .replace('ss', String(s).padStart(2, '0'))
}

export const CountDown = forwardRef<HTMLDivElement, CountDownProps>(function CountDown(
  { className, value, format = 'HH:mm:ss', onFinish, prefix, suffix, title, ...props },
  ref,
) {
  const [remaining, setRemaining] = useState(() => Math.max(0, value - Date.now()))

  useEffect(() => {
    const update = () => {
      const r = Math.max(0, value - Date.now())
      setRemaining(r)
      if (r <= 0) onFinish?.()
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [value, onFinish])

  return (
    <div ref={ref} className={cn('inline-block', className)} {...props}>
      {title ? <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">{title}</div> : null}
      <div className="text-2xl font-semibold tabular-nums text-slate-900 dark:text-slate-100">
        {prefix ? <span className="mr-1">{prefix}</span> : null}
        {formatDuration(remaining, format)}
        {suffix ? <span className="ml-1">{suffix}</span> : null}
      </div>
    </div>
  )
})
