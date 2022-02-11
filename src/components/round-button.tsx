import React from 'react'

interface Props {
  variant: 'primary' | 'secondary'
  url: string
  count?: number
}

const RoundButton: React.FC<Props> = ({ variant, url, count }) => {
  return (
    <>
      {variant === 'primary' ? (
        <button className='notification-button notification-button-primary'>
          <img src={url} alt='button icon' />
          <div className='absolute flex justify-center items-center text-white bg-red-700 w-5 h-5 rounded-full -top-1 -right-1'>
            {count}
          </div>
        </button>
      ) : (
        <button className='notification-button notification-button-light'>
          <img src={url} alt='button icon' />
        </button>
      )}
    </>
  )
}

export default RoundButton
