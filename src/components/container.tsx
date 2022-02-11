import React from 'react'

interface Props {
  children: React.ReactNode
  styleClass?: string
}

const Container: React.FC<Props> = ({ children, styleClass }) => {
  return (
    <div className={`container mx-auto ${styleClass ? styleClass : ''}`}>
      {children}
    </div>
  )
}

export default Container
