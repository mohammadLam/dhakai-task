import React from 'react'
import Company from './company'
import styles from './company-list.module.css'

const CompanyList: React.FC = () => {
  return (
    <div className={styles.companyList}>
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
    </div>
  )
}

export default CompanyList
