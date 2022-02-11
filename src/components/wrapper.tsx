import React from 'react'

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className='ml-20 w-auto'>{children}</div>
}

export default Wrapper
