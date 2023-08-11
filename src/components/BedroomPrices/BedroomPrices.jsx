import React from 'react'
import './BedroomPrices.css'

function BedroomPrices({home}) {
    const bedroomPriceObject = home?.bedroom_prices;
    
    
    
    let displayBedroomAndPrice;
    if (bedroomPriceObject !== undefined) {
        displayBedroomAndPrice = Object.keys(bedroomPriceObject).map((key, index) => (
        <div className='bedroom-and-price' key={key}>
            <p className='bedroomNumber'>
            Bedroom {index + 1}:
            </p>
            <p className='bedroomPrice'>£{bedroomPriceObject[key]} per week</p>
        </div>
    ))
    }


  return (
    <div className='bedroomsPrices-container'>
        {
            displayBedroomAndPrice
        }
    </div>
  )
}
export default BedroomPrices