import React, {useState, useEffect} from 'react'
import Search from '../../components/Search/Search'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../components/CityCard/CityCard';
import {TbWorldSearch} from 'react-icons/tb'
import {MdOutlineChecklistRtl} from 'react-icons/md'
import {IoReceiptOutline} from 'react-icons/io5'
import {MdOutlineRealEstateAgent} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import personImg from '../../assets/person.png'
import { Link } from 'react-router-dom';

function Homepage() {
  const [cities, setCities] = useState([])
  const [query, setQuery] = useState('');
  const [resultHomes, setResultHomes] = useState([]);

  useEffect(
    () => {
      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res => {
        setCities(res.data.response);
      })
      .catch(err => console.log(err))
    }, []
  )

 
  const searchCity = () => {
    const homes = cities.find(element => element.name.toLowerCase() == query.toLowerCase())
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${homes._id}`)
    .then(res => {
      setResultHomes(res.data.response)
    })
    .catch(err => console.log(err))
    
  }


  const getUserQuery = (e) => {
    setQuery(e.target.value)
  }
  
  return (
    <div className='homepage-container'>
        <div className='cover-container'>
            <h1>Find student homes <br/> with bills included</h1>
            <p>A simple and faster way to search for student accommodation</p>
            <div className='search-container'>
              <input 
              className='search-input'
              placeholder='Search by city'
              onChange={getUserQuery}/>
              {
                query.trim() && (
                  <div className='search-results-container'>
                    {resultHomes.map(result => (
                      <Search key={result?._id} home={result} setQuery={setQuery}/>
                    ))}
                  </div>
                )
              }
              <button className='findHomes-btn' onClick={searchCity}>Find Homes</button>
            </div>
        </div>
        <section className='cities-section'>
          <p>Student accommodations in our top cities</p>
          <div className='cities-container'>
            {
              cities.slice(0, 9).map(item => 
                  <CityCard key={item._id} city={item}/>
              ) 
            }
          </div>
          <Link to={'/allcities'}><button className='all-cities-btn'>See All Cities</button></Link>
        </section>
        <aside className='compare-section'>
          <h3>Compare all inclusive student homes.</h3>
          <div className='info-container'>
            <div className='info'>
              <TbWorldSearch className='info-icon'/>
              <h4>Search</h4>
              <p>Find your dream home in the perfect area near your univeristy</p>
            </div>
            <div className='info'>
              <MdOutlineChecklistRtl className='info-icon'/>
              <h4>Compare</h4>
              <p>Compare student accommodation to find the right home for you.</p>
            </div>
            <div className='info'>
              <IoReceiptOutline className='info-icon'/>
              <h4>Bills Included</h4>
              <p>Bills are included in all rent prices. No hidden fees.</p>
            </div>
          </div>
        </aside>
        <section className='extra-info-section'>
          <div className='extra-info-container'>
            <div className='extra-info'>
              <MdOutlineRealEstateAgent className='extra-info-icon' />
              <div className='search-compare'>
                <h4>Best selection</h4>
                <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
              </div>
            </div>
            <div className='extra-info'>
              <AiOutlineHeart className='extra-info-heart'/>
              <div className='search-compare'>
                <h4>Your favorite</h4>
                <p>Shortlist your favourite properties and send enquiries in one click.</p>
              </div>
            </div>
            <Link to={'/allcities'} className="search-and-compare">Search & Compare</Link>
          </div>
          <aside>
            <img src={personImg} alt='person'/>
          </aside>
        </section>
    </div>
  )
}

export default Homepage