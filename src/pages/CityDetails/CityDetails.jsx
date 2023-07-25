import React, {useState, useEffect} from 'react'
import Filter from '../../components/Filter/Filter'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard';

function CityDetails() {
  const {cityId} = useParams()
  const [properties, setProperties] = useState([])

  useEffect(
    () => {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res => {
        setProperties(res.data.response)
      })
      .catch(err => console.log(err))
    }, []
  )

  return (
    <div className='citydetails-container'>
      <div className='cover-container'>
        <h1>Search Accomodation</h1>
        <p>Whatever you're after, we can help you find the right student accommodation for you. </p>
        <Filter />
      </div>
      <section className='allproperties-section'>
        <h3>6 homes in Leeds</h3>
        <div className='allproperties-container'>
          {
            properties.map(item => <PropertyCard key={item._id} property={item} />)
          }
        </div>
      </section>
    </div>
  )
}

export default CityDetails