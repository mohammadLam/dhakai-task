import React from 'react'
import Category from './category-button'
import Container from './container'

const CategoryList: React.FC = () => {
  return (
    <div className='bg-white shadow py-3 px-10'>
      <Container styleClass='flex gap-x-5 overflow-x-hidden'>
        <Category text='All for you' isSelected={true} />
        <Category text='Recommended' />
        <Category text='Top Manufectures' />
        <Category text='winter Special' />
        <Category text='Demin Special' />
        <Category text='Womans Wear' />
        <Category text='Kids Wear' />
        <Category text='T-Shirt' />
        <Category text='Mens Shoes' />
        <Category text='Kids Wear' />
        <Category text='T-Shirt' />
        <Category text='Mens Shoes' />
      </Container>
    </div>
  )
}

export default CategoryList
