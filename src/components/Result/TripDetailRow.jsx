import React from 'react'

const TripDetailRow = ({label,value}) => {
  return (
    <div className='flex w-full   items-center justify-between py-4 mt-2'>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  )
}

export default TripDetailRow
