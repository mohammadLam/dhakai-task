import React, { useState } from 'react'

type buttonType = 'Explore' | 'Activity'

interface Props {
  type: buttonType
}

const ExploreActivityButton: React.FC<Props> = ({ type }) => {
  const [selectedButton, setSelectedButton] = useState<buttonType>(type)
  const activeClass =
    'explore-activity-selected-shadow bg-primary px-4 py-1 font-bold text-white rounded-full'
  const inactiveClass =
    'bg-transprent px-4 py-1 font-bold text-white rounded-full'

  return (
    <div className='bg-primary-dark p-1 rounded-full explore-activity-div-shadow'>
      <button
        className={selectedButton === 'Explore' ? activeClass : inactiveClass}
        onClick={() => setSelectedButton('Explore')}>
        Explore
      </button>
      <button
        className={selectedButton === 'Activity' ? activeClass : inactiveClass}
        onClick={() => setSelectedButton('Activity')}>
        Activity
      </button>
    </div>
  )
}

export default ExploreActivityButton
