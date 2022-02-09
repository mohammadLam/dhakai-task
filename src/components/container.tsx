import React from 'react'
import styles from './container.module.css'

interface Props {
  children: React.ReactNode
  styleClass?: string
}

const Container: React.FC<Props> = ({ children, styleClass }) => {
  return <div className={`${styles.container} ${styleClass}`}>{children}</div>
}

export default Container
