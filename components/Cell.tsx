import React from 'react'

function classNames(styles: string[]) {
  return styles.filter(Boolean).join(' ')
}

type CellProps = {
  line: 'top' | 'right' | 'bottom' | 'left'
}

function Cell({ line, children }: React.PropsWithChildren<CellProps>) {
  const isHorizontal = line === 'left' || line === 'right'
  const isVertical = line === 'top' || line === 'bottom'
  return (
    <div className="relative flex h-52 w-52 items-center justify-center">
      {isHorizontal && (
        <div
          className={classNames([
            'absolute top-1/2 h-[2px] w-1/2 bg-gray-400',
            line === 'right' ? 'right-0' : 'left-0',
          ])}
        />
      )}
      {isVertical && (
        <div
          className={classNames([
            'absolute right-1/2 h-1/2 w-[2px] bg-gray-400',
            line === 'bottom' ? 'bottom-0' : 'top-0',
          ])}
        />
      )}
      {children}
    </div>
  )
}

export default Cell
