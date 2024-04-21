import React from 'react'
import './Facilities.css'
import Gallery_1 from '../../assets/hra_go.png'
import Gallery_2 from '../../assets/hra_comlab.jpg'
import Gallery_3 from '../../assets/hra_ing.jpg'
import Gallery_4 from '../../assets/hra_court.jpg'


const Facilities = () => {
  return (
    <div className='facilities'>
        <div className="gallery">
            <img src={Gallery_1} alt="" />
            <img src={Gallery_2} alt="" />
            <img src={Gallery_3} alt="" />
            <img src={Gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here! <span className="material-symbols-outlined">arrow_right_alt </span> </button>
    </div>
  )
}

export default Facilities
