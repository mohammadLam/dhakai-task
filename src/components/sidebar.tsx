import React from 'react'
import styles from './sidebar.module.css'
import DhakaiIcon from '../img/sidebar/Dhakai.svg'
import HomeIcon from '../img/sidebar/Home.svg'
import SearchIcon from '../img/sidebar/Search.svg'
import BagIcon from '../img/sidebar/Bag.svg'
import ShirtIcon from '../img/sidebar/Shirt.svg'
import RopeIcon from '../img/sidebar/Rope.svg'
import ShopIcon from '../img/sidebar/Shop.svg'
import RecycleIcon from '../img/sidebar/Recycle.svg'

import SettingsIcon from '../img/sidebar/Settings.svg'
import LogoutIcon from '../img/sidebar/Logout.svg'
import InfoIcon from '../img/sidebar/Info.svg'

const Sidebar: React.FC = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.firstSideSection}>
        <a href='/'>
          <img src={DhakaiIcon} alt='dhakai' />
        </a>

        <div className={styles.sidebarIcon}>
          <a href='/'>
            <img src={HomeIcon} alt='dhakai' />
          </a>

          <a href='/'>
            <img src={SearchIcon} alt='dhakai' />
          </a>

          <a href='/'>
            <img src={BagIcon} alt='dhakai' />
          </a>

          <a href='/'>
            <img src={ShirtIcon} alt='dhakai' />
          </a>

          <a href='/'>
            <img src={RopeIcon} alt='dhakai' />
          </a>

          <a href='/'>
            <img src={ShopIcon} alt='dhakai' />
          </a>

          <a href='/'>
            <img src={RecycleIcon} alt='dhakai' />
          </a>
        </div>
      </div>

      <div className={styles.sidebarIcon}>
        <a href='/'>
          <img src={SettingsIcon} alt='dhakai' />
        </a>

        <a href='/'>
          <img src={InfoIcon} alt='dhakai' />
        </a>

        <a href='/'>
          <img src={LogoutIcon} alt='dhakai' />
        </a>
      </div>
    </section>
  )
}

export default Sidebar
