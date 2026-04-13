import { forwardRef, useState, useRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface InputOTPProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  length?: number
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  mask?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const InputOTP = forwardRef<HTMLDivElement, InputOTPProps>(function InputOTP(
  { className, length = 6, value: controlledValue, onChange, disabled = false, mask = false, size = 'md', ...props },
  ref,
) {
  const [internal, setInternal] = useState('')
  const isControlled = controlledValue !== undefined
  const val = isControlled ? controlledValue : internal
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const sizeCls = { 'h-8 w-8 text-sm': size === 'sm', 'h-10 w-10 text-base': size === 'md', 'h-12 w-12 text-lg': size === 'lg' }

  const update = (newVal: string) => {
    if (!isControlled) setInternal(newVal)
    onChange?.(newVal)
  }

  const charsToString = (cells: string[]) => cells.join('')

  const handleInput = (index: number, char: string) => {
    if (!/^\d?$/.test(char)) return
    const cells = Array.from({ length }, (_, i) => val[i] ?? '')
    cells[index] = char
    const next = charsToString(cells).slice(0, length)
    update(next)
    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !val[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
      const cells = Array.from({ length }, (_, i) => val[i] ?? '')
      cells[index - 1] = ''
      update(charsToString(cells))
    }
    if (e.key === 'ArrowLeft' && index > 0) inputsRef.current[index - 1]?.focus()
    if (e.key === 'ArrowRight' && index < length - 1) inputsRef.current[index + 1]?.focus()
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    update(pasted)
    const focusIdx = pasted.length >= length ? length - 1 : pasted.length
    requestAnimationFrame(() => inputsRef.current[focusIdx]?.focus())
  }

  return (
    <div ref={ref} className={cn('inline-flex gap-2', className)} {...props}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => { inputsRef.current[i] = el }}
          type={mask ? 'password' : 'text'}
          inputMode="numeric"
          maxLength={1}
          disabled={disabled}
          value={val[i] ?? ''}
          onChange={(e) => handleInput(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={i === 0 ? handlePaste : undefined}
          className={cn(
            'rounded-md border border-slate-300 bg-white text-center outline-none transition',
            'focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
            'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100',
            'disabled:cursor-not-allowed disabled:opacity-60',
            sizeCls,
          )}
        />
      ))}
    </div>
  )
})
