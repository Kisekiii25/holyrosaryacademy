import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>At <span>HRA,</span> every <span>Learner</span> Is a <span>Leader.</span></h1>
            <p>
                Education founded on love and respect of the Supreme Being, superimposes on the learner the values that predicate academic excellence.
                In our pursuit for excellence, our entire school community dedicates itself to God, country, and the Filipino people.
            </p>
            <button className='btn'>Explore more <span className="material-symbols-outlined">arrow_right_alt </span> </button>
        </div>
    </div>
  )
}

export default Hero
