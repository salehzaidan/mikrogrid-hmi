import React from 'react'

type DetailProps = {
  variables: { [key: string]: string }
  className?: string
}

function Detail({ variables, className }: DetailProps) {
  return (
    <div className={`grid grid-cols-[auto_auto] gap-x-2 ${className}`}>
      {Object.entries(variables).map(([key, value], index) => (
        <React.Fragment key={index}>
          <div className="font-medium">{key}</div>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Detail
