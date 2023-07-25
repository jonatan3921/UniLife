import React, {useState, useEffect} from 'react'
import './AllCities.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllCities() {
    const [cities, setCities] = useState([])

    useEffect(
        () => {
          axios.get(`https://unilife-server.herokuapp.com/cities`)
          .then(res => {
            console.log(res.data.response)
            setCities(res.data.response);
          })
          .catch(err => console.log(err))
        }, []
      )

  return (
    <div className='allcities-container'>
        <div className='cover-container'>
            <h1>Student Accomodation</h1>
            <p>UniLife have student accommodation available across the UK.
            Whatever you're after, we can help you find the right student accommodation for you. </p>
        </div>
        <section className='allcities-section'>
            <h3>Search by city</h3>
            <div className='city-container'>
                {
                cities.map(item => <Link to={`/citydetails/${item?._id}`} className='city'>{item?.name}</Link>)
                }
            </div>
        </section>
    </div>
  )
}

export default AllCities