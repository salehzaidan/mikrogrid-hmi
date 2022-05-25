import React from 'react'

type DetailProps = {
  variables: { [key: string]: string }
  header?: string
  className?: string
}

function Detail({ variables, header, className }: DetailProps) {
  return (
    <div className={`grid grid-cols-[auto_auto] gap-x-2 ${className}`}>
      {header && (
        <h3 className="col-span-2 mb-1 text-center font-medium">{header}</h3>
      )}
      {Object.entries(variables).map(([key, value], index) => (
        <React.Fragment key={index}>
          <div
            dangerouslySetInnerHTML={{ __html: key }}
            className="font-medium"
          />
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Detail
