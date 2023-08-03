import React, {useState, useEffect} from 'react'
import './Filter.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Filter({filterProperties}) {
  const bedroomOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const bathroomOptions = [1, 2, 3]
  const priceOptions = [1000, 1500, 2000, 2500, 3000]
  const propertyTypeOptions = ['Any', 'Apartment', 'Detached', 'Semi-Detached']

  const [selectedBedrooms, setSelectedBedrooms] = useState(0)
  const [selectedBathrooms, setSelectedBathrooms] = useState(0)
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [selectedType, setSelectedType] = useState('')

  const handleOptions = (e) => {
    e.preventDefault()

    filterProperties(selectedBedrooms, selectedBathrooms, selectedPrice, selectedType)
  }
  
  
  
  return (
    <form className='filter-container' >
        <div className="filter-option">
            <label htmlFor="min-bedroom">Min Bedroom</label>
            <select name="min-bedroom" onChange={(e) => {setSelectedBedrooms(e.target.value)}}>
              {
                bedroomOptions.map(item => {
                  return <option value={item} key={item}>{item}</option>
                })
              }
            </select>
        </div>

        <div className="filter-option">
            <label htmlFor="min-bathroom">Min Bathroom</label>
            <select name="min-bathroom" onChange={(e) => {setSelectedBathrooms(e.target.value)}}>
              {
                bathroomOptions.map(item => {
                  return <option value={item} key={item}>{item}</option>
                })
              }
            </select>
        </div>

        <div className="filter-option">
            <label htmlFor="max-price">Max Price</label>
            <select name="max-price" onChange={(e) => {setSelectedPrice(e.target.value)}}>
              <option value={5000}>5000</option>
              {
                priceOptions.map(item => {
                  return <option value={item} key={item}>{item}</option>
                })
              }
            </select>
        </div>

        <div className="filter-option">
            <label htmlFor="home-type">Home Type</label>
            <select name="home-type" onChange={(e) => {setSelectedType(e.target.value)}}>
              {
                propertyTypeOptions.map(element => <option value={element} key={element}>{element}</option>)
              }
            </select>
        </div>
        <button onClick={handleOptions}>Submit</button>
    </form>
  )
}

export default Filter