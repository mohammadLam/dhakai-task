import React from 'react'
import styles from './notification.module.css'
import RoundButton from './round-button'
import ChatIcon from '../img/chat.svg'
import NotificationIcon from '../img/notification.svg'
import Lacoste from '../img/lacoste-logo.svg'

const Notification: React.FC = () => {
  return (
    <div className={styles.roundButtonDiv}>
      <RoundButton count={3} url={ChatIcon} variant='primary' />
      <RoundButton count={6} url={NotificationIcon} variant='primary' />
      <RoundButton count={6} url={Lacoste} variant='secondary' />
    </div>
  )
}

export default Notification
