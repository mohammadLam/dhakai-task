import React from 'react'
import styles from './company.module.css'

const Company: React.FC = () => {
  return (
    <div className={styles.comapanyBox}>
      <div className={styles.banners}>
        <img
          src='https://dev-cdn-dhakai.s3.amazonaws.com/a353acf5-30d2-497f-8ed3-8a37870ceada.png'
          className={styles.bannerImg}
          alt='banner'
        />
        <img
          src='https://dev-cdn-dhakai.s3.amazonaws.com/63f5da0f-a8ff-41e9-9e22-1cb7498ddb11.png'
          className={styles.bannerImg}
          alt='banner'
        />
        <img
          src='https://dev-cdn-dhakai.s3.amazonaws.com/a353acf5-30d2-497f-8ed3-8a37870ceada.png'
          className={styles.bannerImg}
          alt='banner'
        />
      </div>

      <div className={styles.logoDiv}>
        <img
          className={styles.logo}
          src='https://dev-cdn-dhakai.s3.amazonaws.com/a9eae919-e449-4239-8aa5-32299a67bbe4.png'
          alt='logo'
        />
      </div>

      <div className={styles.companyDetailsDiv}>
        <p className={styles.companyName}>Paul Garments Limited</p>
        <div className={styles.locationQuantityDiv}>
          <p className={styles.companyLocation}>Dhaka, Bangladesh</p>
          <p className={styles.minQuantity}>Min Qty: 500</p>
        </div>
        <p className={styles.clothes}>Hoodies, Trousers, Jacket Hoodies</p>
        <button className={styles.detailsButon}>View Details</button>
      </div>
    </div>
  )
}

export default Company
