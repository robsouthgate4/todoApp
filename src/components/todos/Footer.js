import React, { PropTypes } from 'react'
import {Link} from '../router'

export const Footer = (props) =>  (
    <div className="footer">
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Complete</Link>
    </div>  )
