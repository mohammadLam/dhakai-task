import React from 'react'
import styles from './wrapper.module.css'

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
