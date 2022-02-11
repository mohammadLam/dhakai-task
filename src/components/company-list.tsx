import React, { useEffect } from 'react'
import Company from './company'
import Comapnies, { Manufacturer } from '../interface'
import InfiniteScroll from 'react-infinite-scroller'

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = React.useState<Manufacturer[]>([])
  const [limit, setLimit] = React.useState<number>(8)
  const [skip, setSkip] = React.useState<number>(0)

  const fetchCompanies = async () => {
    const response = await fetch(
      `https://devapi.dhakai.com/api/v2/manufacturers?limit=${limit}&skip=${skip}`,
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkaGFrYWkuY29tIiwiZGF0YSI6eyJlbWFpbCI6InJhamliMkBnbWFpbC5jb20iLCJkZXZpY2VVdWlkIjoiOTllODg5NjAtODkwOC0xMWVjLTg3NTItNmIyZDc4MjE2NmFkIiwidXNlclVpZCI6IkJVLTFNSlZGIiwibmFtZSI6Ik1kIFR1c2hlciBIZWxsbyIsImNvbXBhbnlOYW1lIjoiRGhha2FpIEJhbmdsYWRlc2giLCJ1c2VyVHlwZSI6IkJVWUVSIiwidXNlclJvbGUiOiJCVVlFUiIsImxvZ2luVHlwZSI6IkVNQUlMIn0sImlhdCI6MTY0NDM0MzEzMSwiZXhwIjoxNjUyMTE5MTMxfQ.GVpX0NhR0ImhJXfBsOi9EQmLh0N1muPjfXynjins6nZ2Z6m23Vu7B9CVdM2FEQ_pahBqc8uusgANCOevyVOYcy9nFFM21Yv2Dbuyhiwrj9AmuLExlndf54nxZMVfqlLm979uCMAs81qyDH104O8n3994tDS3zbFRzvsL75Hs7c6CUo5zfMvpofrw9EH6hs9pLgItChjmHfL9u6omhKKu2afu6-mgRrrWP64LQJ_ZhFydx9Jp1JZGKr95telPiJG7gLzT1dS1SGidN-xvQW8XjxULZEHStFZtMqb2eGw8R9I5MccB3T8akjUmalqu5cotmMsimRnL-FkiA_i8hDmvEUl1g5R4hdjmVoBWlW6H137q6qW1DB2zADZ-_b0ATZ3y63MtRRf4o-TvpbFhETiDzPMi0G0fohn_o6QcrSGSHtC9kyB9PDTKguMYexXEyNoSh0sXsKE9sd_usKSm0nZziE7ALdhTch8iU9Bf2R4G4R7qTLMYdxhJ5XDXyXGQult-neh1xk-sOscV_6sBDVXRAK1g-qbh6n2QavvCVFAe58Z8FvMoQQmaemB1xy3ei6JtGqtMSaIk69hxG3C6HjZIaXjEXoJVTDnE4QGpa7OHD5pVJjYvJQgSFOs_1sTIisb9IXy2CFYy5Sx3vq2etsaOhW_HW4Hm2NcZs_MW01XKsXA'
        }
      }
    )

    const companies: Comapnies = await response.json()
    setCompanies(companies.result.manufacturers)
    setSkip(skip + limit)
  }

  useEffect(() => {
    document.title = 'Company List'
    // fetchCompanies()
    window.addEventListener('scroll', () => {
      console.log('Scroll')
      console.log(window.innerHeight)
    })
  }, [])

  return (
    // <InfiniteScroll
    //   pageStart={0}
    //   loadMore={fetchCompanies}
    //   hasMore={true}
    //   loader={<div className='loader'>What the hell</div>}
    //   element='div'>
    //   <div className='grid grid-cols-4 mt-5 gap-5'>
    //     {companies.length > 0 &&
    //       companies.map((company, index) => (
    //         <Company key={index} company={company} />
    //       ))}
    //   </div>
    // </InfiniteScroll>
    <div></div>
  )
}

export default CompanyList
