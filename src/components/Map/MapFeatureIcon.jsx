import { Icon } from '@iconify/react'
import React from 'react'

const MapFeatureIcon = ({icon}) => {
  return (
    <div className='bg-white px-2 py-1 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.25)] '>
     <Icon icon={icon} width="24" height="24" />
    </div>
  )
}

export default MapFeatureIcon
