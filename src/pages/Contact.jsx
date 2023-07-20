import React, { useRef } from 'react';
// getElemenetById , querySelector evez edir useRef
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formEl = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    //   third party api
//                      your services id , YOUR_TEMPLATE_ID,                   YOUR_PUBLIC_KEY
      emailjs.sendForm('service_5cb617k', 'template_16d8gom', formEl.current, '-1q8xDLNDb75DIfCO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


// formu sifirlamaq alinmadi XXXX
    // formEl.current.reset()

  return (

 <div className='contact-section text-white'>

    
    <div class="container ">
  <form ref={formEl} onSubmit={sendEmail} action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="name" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="surname" placeholder="Your last name.."/>
    
    <label for="lname">Email address</label>
    <input type="text" id="lname" name="email" placeholder="Your write email address.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Turkish">Turkish</option>
      <option value="USA">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"/>

    </form>
    </div>

 </div>
  )
}

export default Contact