import { forwardRef, type ReactNode, type TableHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface TableColumn<T> {
  key: keyof T | string
  title: ReactNode
  render?: (value: unknown, record: T, index: number) => ReactNode
}

export interface TableProps<T extends Record<string, unknown>>
  extends Omit<TableHTMLAttributes<HTMLTableElement>, 'children'> {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: keyof T | ((record: T, index: number) => string)
  emptyText?: ReactNode
}

export const Table = forwardRef<HTMLTableElement, TableProps<Record<string, unknown>>>(
  function Table({ className, columns, dataSource, rowKey, emptyText = 'No data', ...props }, ref) {
    return (
      <div className="nova-scrollbar overflow-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table ref={ref} className={cn('min-w-full divide-y divide-slate-200 dark:divide-slate-700', className)} {...props}>
          <thead className="bg-slate-50 dark:bg-slate-900/50">
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-900">
            {dataSource.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-center text-sm text-slate-500" colSpan={columns.length}>
                  {emptyText}
                </td>
              </tr>
            ) : (
              dataSource.map((record, index) => {
                const key =
                  typeof rowKey === 'function'
                    ? rowKey(record, index)
                    : rowKey
                      ? String(record[rowKey])
                      : String(index)

                return (
                  <tr key={key} className="text-sm text-slate-700 dark:text-slate-200">
                    {columns.map((column) => {
                      const value = record[column.key as keyof typeof record]
                      return (
                        <td key={String(column.key)} className="px-4 py-3">
                          {column.render ? column.render(value, record, index) : (value as ReactNode)}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    )
  },
)
