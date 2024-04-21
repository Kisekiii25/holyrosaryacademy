import React, { useRef } from 'react'
import './Announcements.css'
import Announcement from '../../assets/hra_preToJhs_admission2023-2024.webp'
import Announcement2 from '../../assets/hra_shs_admission2023-2024.webp'
import Announcement3 from '../../assets/hra_announcement.jpg'

const Announcements = () => {

    const slider = useRef();
    let tx = 0; // Translate x

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='Announcements'>
        <span class="material-symbols-outlined next-btn" onClick={slideForward}>arrow_right_alt</span>
        <span class="material-symbols-outlined back-btn" onClick={slideBackward}>keyboard_backspace</span>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <h2>We are now open!</h2>
                        <p>We are now accepting enrollees for <br/> SY 2023-2024</p>
                        <div className="imageContainer">
                            <a href={Announcement}>
                                <img className='announcement' src={Announcement} alt="" />
                            </a>
                            <a href={Announcement2}>
                                <img className='announcement' src={Announcement2} alt="" />
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h2>Partnership</h2>
                        <p>We are delighted to announce a new partnership with WELA school system (EskWELA) in creating dynamic learning environment and shaping a brighter future for young learners. You can download the app through Google Playstore or Apple Store to access easily the school’s announcements, upcoming events, and matters involving enrollment and fees.</p>
                        <div className="imageContainer"></div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h2>Announcement!</h2>
                        <p>Please be guided accordingly.</p>
                        <div className="imageContainer">
                            <a href={Announcement3}>
                                <img className='announcement' src={Announcement3} alt="" />
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h2>Yow4</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum quasi fuga similique temporibus inventore unde nam maiores et illum labore delectus dignissimos aspernatur a iure ipsam, rem id? Soluta.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Announcements
