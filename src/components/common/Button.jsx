import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({className,name,icon,onClick,type}) => {
  return (
  <div onClick={onClick} className={className}>

    <button type={type}>{name}</button>
    <Icon icon={icon} width={20} height={20}/>
  </div>
  )
}

export default Button
