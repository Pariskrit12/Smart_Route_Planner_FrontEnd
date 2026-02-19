import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({pageLink,name}) => {
  return (
    <div>
      <Link to={pageLink}>{name}</Link>
    </div>
  )
}

export default LinkButton
