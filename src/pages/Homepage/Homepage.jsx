import React from 'react'
import Search from '../../components/Search/Search'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
        <div className='cover-container'>
            <h1>Find student homes <br/> with bills included</h1>
            <p>A simple and faster way to search for student accommodation</p>
            <Search />
        </div>
    </div>
  )
}

export default Homepage