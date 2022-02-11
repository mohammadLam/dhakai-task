import React from 'react'

interface Props {
  isSelected?: boolean
  text: string
}

const Category: React.FC<Props> = ({ isSelected, text }) => {
  return (
    <div className={`${isSelected ? 'button button-selected' : 'button'}`}>
      {text}
    </div>
  )
}

export default Category
