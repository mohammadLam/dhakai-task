import React from 'react';
import Category from './category-button';
import Arrow from '../img/arrow.svg';
import { Carousel } from '@trendyol-js/react-carousel';

const RightArrow = () => <img src={Arrow} alt='right' />;
const LeftArrow = () => <img className='rotate-180' src={Arrow} alt='right' />;

const CategoryList: React.FC = () => {
  return (
    <Carousel
      show={7}
      slide={3}
      swiping={true}
      leftArrow={<LeftArrow />}
      rightArrow={<RightArrow />}
      infinite={false}
      className='bg-white shadow flex gap-x-5 py-3 px-10 items-center'>
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
    </Carousel>
  );
};

export default CategoryList;
