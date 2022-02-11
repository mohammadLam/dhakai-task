import React from 'react'
import Notification from './notification'
import Search from './search'
import Container from './container'
import ExploreActivityButton from './explore-activity'

const Navbar: React.FC = () => {
  return (
    <div className='bg-primary'>
      <Container styleClass='flex items-center justify-between h-20'>
        <ExploreActivityButton type='Explore' />
        <Search />
        <Notification />
      </Container>
    </div>
  )
}

export default Navbar
