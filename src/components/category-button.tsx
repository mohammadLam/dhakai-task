import React from 'react'
import styles from './category-button.module.css'

interface Props {
  isSelected?: boolean
  text: string
}

const Category: React.FC<Props> = ({ isSelected, text }) => {
  return (
    <button
      className={`${styles.categoryBtn} ${isSelected ? styles.selected : ''}`}>
      {text}
    </button>
  )
}

export default Category
