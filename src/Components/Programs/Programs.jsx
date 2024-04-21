    import React from 'react'
    import './Programs.css'
    import preschool from '../../assets/HRA Programs.png'
    import elementary from '../../assets/HRA Programs-1.png'
    import highSchool from '../../assets/HRA Programs-2.png'
    import deped from '../../assets/deped_logo.png'

    const Programs = () => {
    return (
        <>
        <div className='programs'>
            <div className="program">
                <img src={preschool} alt="" />
                <div className="caption">
                    <span className="material-symbols-outlined">school</span>
                    <h3>Pre-School</h3>
                    <p>Click to see more!</p>
                </div>
            </div>
            <div className="program">
                <img src={elementary} alt="" />
                <div className="caption">
                    <span className="material-symbols-outlined">contract_edit</span>
                    <h3>Grade School</h3>
                    <p>Click to see more!</p>
                </div>
            </div>
            <div className="program">
                <img src={highSchool} alt="" />
                <div className="caption">
                    <span className="material-symbols-outlined">workspace_premium</span>
                    <h3>High School</h3>
                    <p>Click to see more!</p>
                </div>
            </div>
        </div>
        
        <div className="other-offer container"> 
            <div className="offer">
                <h2>&nbsp; We Also Offer &nbsp;</h2>
                <ul>
                    <li>Summer W.A.R.M Classes</li>
                    <li>Robotics</li>
                    <li>Enhance English Curriculum</li>
                    <li>DepEd ESC-Grade 7 to 10 <br /> DepEd VPBs-Grade 11 to 12 <br /> PEAC (FAPE) Voucher Scholarship Program</li>
                </ul>
            </div>
            <div className="collab">
                <h3>All levels recognized by the Department of Education</h3>
                <ul>
                    <li> 
                        <a target='_blank ' href="https://www.deped.gov.ph/">
                            <img className='deped' src={deped} alt="" />
                        </a>
                    </li>
                    <li>
                        <a target='_blank ' href="https://www.franklincovey.com/the-7-habits/#:~:text=Powerful%20Lessons%20in%20Personal%20Change%201%201%20Habit,7%207%20Habit%207%3A%20Sharpen%20the%20Saw%C2%AE%20">
                            <img className='habit' src="https://images.credly.com/size/680x680/images/67ca81ea-e2c4-4ef7-b6c5-b8a4699c3193/image.png" alt="" />
                        </a>
                    </li>
                    <li> 
                        <a target='_blank ' href="https://peac.org.ph/">
                            <img className='peac' src="https://ors.peac.org.ph/assets/images/peac-deped-logo.png" alt="" />
                        </a>
                    </li>
                    <li> 
                        <a target='_blank ' href="https://www.leaderinme.org/">
                            <img className='leader' src="https://i.pinimg.com/originals/22/20/ca/2220ca6d28389f31527a9cb462b411d8.png" alt="" />
                        </a>
                    </li>
                    <li> 
                        <a target='_blank ' href="https://wela.online/en/">
                            <img className='wela' src="https://edutechsolutions.id/assets/front/uploads/logo/wela.png" alt="" />
                        </a>
                    </li>
                    <li> 
                        <a target='_blank ' href="https://education.lego.com/en-us/">
                            <img className='lego' src="https://www.arquimed.cl/educacion/logos/lego_education.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
    }

    export default Programs
