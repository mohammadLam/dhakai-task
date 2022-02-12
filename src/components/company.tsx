import React from 'react';
import { Manufacturer } from '../interface';

interface Props {
  company: Manufacturer;
}

const Company: React.FC<Props> = ({ company }) => {
  const clothes: string = company.productGroups
    .map(clothe => clothe.name)
    .join(', ');

  return (
    <div className='bg-white  company-box-shadow rounded-lg'>
      {/* banners */}
      <div className='flex p-3 gap-x-3'>
        {company.meta.banners.map((banner, index) => (
          <img
            key={index}
            src={banner.url}
            className='object-cover rounded w-full h-90'
            alt='banner'
          />
        ))}
      </div>

      <div className='relative py-6'>
        <img
          className='absolute left-2 -top-12'
          src={company.meta.logo.url}
          alt='logo'
        />
      </div>

      <div className='px-6 pb-6'>
        <p className='mt-4 font-bold text-xl mb-2 text-normal'>
          {company.meta.companyName}
        </p>
        <div className='flex justify-between mb-2'>
          {company.addresses[0]?.city && company.addresses[0]?.country ? (
            <p className='text-light'>
              {company.addresses[0].city}, {company.addresses[0].country}
            </p>
          ) : (
            <p className='text-light'>Location not found</p>
          )}

          <p className='text-green'>Min Qty: {company.minOrderQty}</p>
        </div>
        <p className='text-light mb-5'>{clothes}</p>
        <button className='details-button'>View Details</button>
      </div>
    </div>
  );
};

export default Company;
