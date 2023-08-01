import React, {useState, useEffect} from 'react'
import './Filter.css'


function Filter({properties}) {
  const [bathroom, setBathroom] = useState(0);


   


  const bathroomCount = [];
  const bedroomCount = [];
  const prices = [];
  const homeType = [];

  for (let i = 0; i < properties?.length; i++) {
    bathroomCount.push(properties[i]?.bathroom_count)
    bedroomCount.push(properties[i]?.bedroom_count)
    prices.push(properties[i]?.rent)
    homeType.push(properties[i]?.property_type)
  }

  const bathroomOptions = [...new Set(bathroomCount)]
  const bedroomOptions = [...new Set(bedroomCount)]
  const pricesOptions = [...new Set(prices)]
  const homeTypeOptions = [...new Set(homeType)]
  bathroomOptions.sort((a, b) => a - b);
  bedroomOptions.sort((a, b) => a - b);
  pricesOptions.sort((a, b) => a - b);
  console.log(bathroomOptions);
  console.log(bedroomOptions);
  console.log(pricesOptions);
  console.log(homeTypeOptions);
  


  

  return (
    <div className='filter-container'>
        <div className="filter-option">
            <label for="min-bedroom">Min Bedroom</label>
            <select name="min-bedroom">
              <option>Any</option>
              {
                bedroomOptions.map(element => <option>{element}</option>)
              }
            </select>
        </div>
        <div className="filter-option">
            <label for="min-bathroom">Min Bathroom</label>
            <select name="min-bathroom">
              <option>Any</option>
              {
                bathroomOptions.map(element => <option>{element}</option>)
              }
            </select></div>
        <div className="filter-option">
            <label for="max-price">Max Price</label>
            <select name="max-price">
              <option>Any</option>
              {
                pricesOptions.map(element => <option>{element}</option>)
              }
            </select></div>
        <div className="filter-option">
            <label for="home-type">Home Type</label>
            <select name="home-type">
              <option>Any</option>
              {
                homeTypeOptions.map(element => <option>{element}</option>)
              }
            </select></div>
    </div>
  )
}

export default Filter