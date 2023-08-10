import React from 'react'
import './BedroomPrices.css'

function BedroomPrices({home}) {

    const bedroomPriceObject = home?.bedroom_prices;
    let bedroomLength;
    let bedroomNumber = [];
    if(bedroomPriceObject !== undefined) {
            bedroomLength = Object.keys(bedroomPriceObject).length;
            for (let i = 0; i < bedroomLength; i++) {
                bedroomNumber.push(`Bedroom ${i + 1}`)
            }
            console.log(bedroomNumber);
    }
    
    
    
    let displayBedroomAndPrice;
    if (bedroomPriceObject !== undefined) {
        displayBedroomAndPrice = Object.keys(bedroomPriceObject).map(key => (
        <div className='bedroom-and-price' key={key}>
            <p className='bedroomNumber'>{
            bedroomNumber[Object.keys(bedroomPriceObject).indexOf(key)]}:
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