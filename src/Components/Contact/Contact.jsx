import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending please wait....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0957c479-5cf3-4311-8427-c3ea1339c745");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message sent Successfully!");
        event.target.reset();

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h4>Send us a message <span className="material-symbols-outlined spanDark">contact_mail</span></h4>
            <ul>
                <li>
                    <h5>Location<span class="material-symbols-outlined spanDark">location_on</span> : </h5>
                    St. Joseph Ave. corner Naga Road, Pulanglupa Dos, Las Piñas City, 1740
                </li>
                <li>
                    <h5>Telephone <span class="material-symbols-outlined spanDark">phone_in_talk</span> : </h5>
                    (632) 820-8019 / 825-2027
                </li>
                <li>
                    <h5>Facsimile <span class="material-symbols-outlined spanDark">deskphone</span> : </h5>
                    (632) 820-2723
                </li>
                <li>
                    <h5>HOLY ROSARY ACADEMY OF LAS PIÑAS CITY <span class="material-symbols-outlined spanDark">apartment</span> </h5>
                    KEY OFFICES – DIRECTORY
                </li>
                <li>
                    <h5>GUIDANCE OFFICE <span class="material-symbols-outlined spanDark">perm_phone_msg</span> </h5>
                    (632) 881-6708
                </li>
                <li>
                    <h5>REGISTRAR’S OFFIC <span class="material-symbols-outlined spanDark">perm_phone_msg</span></h5>
                    (632) 881-6806
                </li>
                <li>
                    <h5>PRINCIPAL’S OFFICE <span class="material-symbols-outlined spanDark">perm_phone_msg</span> </h5>
                    (632) 881-3667
                </li>
                <li>
                    <h5>Email  <span class="material-symbols-outlined spanDark">attach_email</span> : </h5>
                    <a className='email' href="mailto:holyrosaryacademylpc@yahoo.com">holyrosaryacademylpc@yahoo.com</a>
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Your email</label>
                <input type="email" name='email' placeholder='Enter your email' required />
                <label>Writte your message here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span className='spanDark'>{result}</span>
        </div>
    </div>
  )
}


export default Contact
