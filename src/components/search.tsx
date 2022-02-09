import React from 'react'
import styles from './search.module.css'
import SearchIcon from '../img/search.svg'

const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <img src={SearchIcon} alt='search-icon' />
      <input
        className={styles.searchInput}
        type='text'
        placeholder='Search by name, group, type and others'
      />
    </div>
  )
}

export default Search
