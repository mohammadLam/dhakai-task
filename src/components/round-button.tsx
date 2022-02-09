import React from 'react'
import styles from './round-button.module.css'

interface Props {
  variant: 'primary' | 'secondary'
  url: string
  count?: number
}

const RoundButton: React.FC<Props> = ({ variant, url, count }) => {
  return (
    <>
      {variant === 'primary' ? (
        <button className={`${styles.roundButton} ${styles.primary}`}>
          <img src={url} alt='button icon' />
          <div className={styles.count}>{count}</div>
        </button>
      ) : (
        <button className={`${styles.roundButton} ${styles.secondary}`}>
          <img src={url} alt='button icon' />
        </button>
      )}
    </>
  )
}

export default RoundButton
