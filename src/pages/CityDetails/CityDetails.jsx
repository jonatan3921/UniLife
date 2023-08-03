import React, {useState, useEffect} from 'react'
import Filter from '../../components/Filter/Filter'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import CityInfoCard from '../../components/CityInfoCard/CityInfoCard'

function CityDetails() {
  const {cityId} = useParams()
  const [properties, setProperties] = useState([])
  const [cityInfo, setCityInfo] = useState([])
  

  useEffect(
    () => {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res => {
        setProperties(res.data.response)
      })
      .catch(err => console.log(err))
    }, []
  )

  useEffect(
    () => {
      axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
      .then(res => {
        setCityInfo(res.data.data);
      })
      .catch(err => console.log(err))
    },[]
  )

  const filterProperties = (bedroom, bathroom, price, propertyType) => {
    const query = {
      city_id: cityId,
      bedroom_count: bedroom,
      bathroom_count: bathroom,
      rent: price,
      property_type: propertyType
    }
    axios.post(`https://unilife-server.herokuapp.com/properties/filter`, {query})
    .then(res => {
      console.log(res.data.response)
      setProperties(res.data.response)
    })
    .catch(err => console.log(err))
  }

  // console.log(properties)

  return (
    <div className='citydetails-container'>
      <div className='cover-container'>
        <h1>Search Accomodation</h1>
        <p>Whatever you're after, we can help you find the right student accommodation for you. </p>
        <Filter filterProperties={filterProperties}/>
      </div>
      <section className='allproperties-section'>
        <h3>{properties.length} {
          properties.length < 2 
          ? 'home'
          : 'homes'
        } in {cityInfo[0]?.name}</h3>
        <div className='allproperties-container'>
          {
            properties ?
            properties.map(item => <PropertyCard key={item._id} property={item} />)
            : null
          }
        </div>
      </section>
      <section className='city-info-section'>
        {
          cityInfo.map(item => <CityInfoCard key={item._id} cityInfo={item}/>)
        }
      </section>
    </div>
  )
}

export default CityDetails