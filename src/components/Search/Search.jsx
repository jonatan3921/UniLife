import React from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'


function Search({city, setQuery}) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    setQuery('')
    navigate(`/citydetails/${city.id}`)
  }

  return (
    <div className='search-results-item' onClick={handleNavigation}>
        <p>{city.name}</p>
    </div>
  )
}

export default Search