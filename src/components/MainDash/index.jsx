import React from 'react'
import Cards from '../Cards';
import Table from '../Table/Table';
import "./style.css";

function MainDash() {
  return (
    <div className='mainDash'>
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>
    </div>
  )
}

export default MainDash
