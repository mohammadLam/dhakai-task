import React from 'react'
import RoundButton from './round-button'
import ChatIcon from '../img/chat.svg'
import NotificationIcon from '../img/notification.svg'
import Lacoste from '../img/lacoste-logo.svg'

const Notification: React.FC = () => {
  return (
    <div className='flex gap-x-5'>
      <RoundButton count={3} url={ChatIcon} variant='primary' />
      <RoundButton count={6} url={NotificationIcon} variant='primary' />
      <RoundButton count={6} url={Lacoste} variant='secondary' />
    </div>
  )
}

export default Notification
