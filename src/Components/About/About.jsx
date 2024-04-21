import React from 'react'
import './About.css'
import about from '../../assets/hra_About.jpg'

const About = () => {
  return (
    <>
    <div className='about'>
        <div className="about-left">
            <img src={about} alt="" />
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Mission and Vision</h2>
            <h4>Vision</h4>
            <p>A School for Virtue Centered Leadership.</p>
            <h4>Mission</h4>
            <p>Developing lifelong learners and leaders with character and competence.</p>
            <h4>Slogan</h4>
            <p>At HRA, every learner is a leader.</p>
        </div>
    </div>
    <hr />
    <div className='about2'>
        <div className="about-left">
            <img src="https://www.pngarts.com/files/1/Objective-PNG-Image.png" alt="" />
        </div>
        <div className="about-right">
            <h2>Objective</h2>
            <ul>
                <li>To guide the learner towards a learning experience with GOD on top of all undertakings.</li>
                <li>To inculcate learning and working habits which are essential in the pursuit of excellence and recognition.</li>
                <li>To maximize physical and mental capabilities of the learner toward attaining self-fulfillment and success.</li>
                <li>To enhance the learner’s interpersonal and academic skills that would ensure his competency and global competitiveness.</li>
            </ul>
        </div>
    </div>
    <hr />
    <div className="addition">
        <h3>In addition, HRA has adopted the following UNESCO’s Pillars of Education for the 21st Century as among the school’s curricular thrusts and guidelines:</h3>
        <ul>
            <li>Learning to <span className='learn'>learn.</span></li>
            <li>Learning to <span className='learn'>do.</span></li>
            <li>Learning to <span className='learn'>be.</span></li>
            <li>Learning to <span className='learn'>live togethe.r</span></li>
        </ul>
    </div>
    <hr />
    <div className="goals">
        <h2>Goals</h2>
        <ul>
            <li>To develop relevant, complete, up-to-date, competitive and comprehensive CURRICULA to equip the school program towards quality education through : </li>
            <ul className='list-of-list'>
                <li>UNESCO’s Four Pillars of Education</li>
                <li>K – 12 Program</li>
                <li>Di-star Reading</li>
                <li>Entrep programs using the ICT Further to this, HRA seeks to highlight the following flagship programs: Business-Entrepreneurship Program, Science, Technical and Vocational, Literary Program and Virtue-Oriented Program.</li>
            </ul>
            <li>HRA library provides access to resources that help them meet the academic standards established for them and to become independent and lifelong learners through references and collections and online public access catalog.</li>
            <li>HRA seeks to provide leading services, create an HR community where people thrive, partnership prevails and performance excels and to be the employer of choice in Las Piñas City where people are proud to work and treated fairly.</li>
            <li>To develop and strengthen the HRA’s promotion and marketing strategies to obtain 10% annual increase of enrollment.</li>
            <li>To continually persuade the old students to retain their enrollment at HRA.</li>
            <li>To provide excellent, quality healthcare and information to all students and employees needs.</li>
            <li>By 2017, HRA aims to assure the DepEd in equipping the desired learning environment by 100% in placed. To provide sufficient and adequate educational tools and equipment that revolutionized learning experiences for fast-pacing world. This tool highlights and enhances your student’s fullest potential for global competitiveness.</li>
            <li>HRA aims to build strong relationship among alumni and continuously look to their alma mater. Encourage them to enhance their talents and abilities by engaging / participating in our activities such as Interest Clubs, Alumni Homecoming, get-together parties, Foundation Day, etc.</li>
            <li>HRA seeks to provide responsive, effective and sustainable support for less fortunate children and their families living in low-income community through annual outreach programs.</li>
        </ul>
    </div>

    </>
  )
}

export default About
