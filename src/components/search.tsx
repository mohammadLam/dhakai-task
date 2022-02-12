import React from 'react';
import SearchIcon from '../img/search.svg';

const Search: React.FC = () => {
  return (
    <div className='bg-white px-4 py-2 rounded-full gap-x-4 hidden md:flex'>
      <img src={SearchIcon} alt='search-icon' />
      <input
        className='bg-transparent border-none outline-none'
        type='text'
        placeholder='Search by name, group, type and others'
      />
    </div>
  );
};

export default Search;
