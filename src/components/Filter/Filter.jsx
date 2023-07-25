import React from 'react'
import './Filter.css'

function Filter() {
  return (
    <div className='filter-container'>
        <div className="filter-option">
            <label for="min-bedroom">Min Bedroom</label>
            <select name="min-bedroom">
            </select>
        </div>
        <div className="filter-option">
            <label for="min-bathroom">Min Bathroom</label>
            <select name="min-bathroom">
            </select></div>
        <div className="filter-option">
            <label for="max-price">Max Price</label>
            <select name="max-price">
            </select></div>
        <div className="filter-option">
            <label for="home-type">Home Type</label>
            <select name="home-type">
            </select></div>
    </div>
  )
}

export default Filter