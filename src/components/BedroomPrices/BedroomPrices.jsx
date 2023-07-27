import React from 'react'
import './BedroomPrices.css'

function BedroomPrices({home}) {

    const bedroomPriceObject = home?.bedroom_prices;
    
    let displayBedroomAndPrice;
    if (bedroomPriceObject !== undefined) {
        displayBedroomAndPrice = Object.keys(bedroomPriceObject).map(key => (
        <div className='bedroom-and-price' key={key}>
            <p className='bedroomNumber'>{key}:</p>
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