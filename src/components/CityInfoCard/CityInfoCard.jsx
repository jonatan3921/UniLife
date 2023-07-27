import React from 'react'
import './CityInfoCard.css'
import studentsImg from '../../assets/students.png'

function CityInfoCard({cityInfo}) {
  return (
    <div className='city-info-container'>
        <div className='city-info'>
            <h2>Being a student in {cityInfo?.name}</h2>
            <p>{cityInfo?.student_life}</p>
            <p>{cityInfo?.universities}</p>
        </div>
        <aside>
            <img src={studentsImg} alt='students'/>
        </aside>
    </div>
  )
}

export default CityInfoCard