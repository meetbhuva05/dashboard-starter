import React from 'react'
import CustomerReview from './CustomerReview'
import "./style.css"
import Updates from './Updates'

function RightSide() {
  return (
    <div className='rightSide'>
      <div>
        <h3>Updates</h3>
        <Updates/>
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview/>
      </div>
    </div>
  )
}

export default RightSide
