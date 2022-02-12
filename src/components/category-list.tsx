import React from 'react';
import Category from './category-button';
// import Arrow from '../img/arrow.svg';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Container from './container';

// const RightArrow = () => <img src={Arrow} alt='right' />;
// const LeftArrow = () => <img className='rotate-180' src={Arrow} alt='right' />;

const CategoryList: React.FC = () => {
  return (
    <div className='bg-white py-3 shadow'>
      <Container>
        <ScrollingCarousel className='flex items-center'>
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
        </ScrollingCarousel>
      </Container>
    </div>
  );
};

export default CategoryList;
