import React from 'react'
import Notification from './notification'
import Search from './search'
import styles from './navbar.module.css'
import Container from './container'

const Navbar: React.FC = () => {
  return (
    <div className={styles.nav}>
      <Container styleClass={styles.container}>
        <Search />
        <Notification />
      </Container>
    </div>
  )
}

export default Navbar
