import React from 'react'
import Category from './category-button'
import styles from './category-list.module.css'
import Container from './container'

const CategoryList = () => {
  return (
    <Container styleClass={styles.categoryDiv}>
      <div className={styles.container}>
        <Category text='All for you' isSelected={true} />
        <Category text='Recommended' />
        <Category text='Top Manufectures' />
        <Category text='winter Special' />
        <Category text='Demin Special' />
        <Category text='Womans Wear' />
        <Category text='Kids Wear' />
        <Category text='T-Shirt' />
        <Category text='Mens Shoes' />
      </div>
    </Container>
  )
}

export default CategoryList
