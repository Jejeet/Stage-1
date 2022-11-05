import React from 'react'
import "./contact.css"
import vectom from "../images/Zuri.png"
import footertext from "../images/Footer text.png"
import I4G from "../images/I4G.png"
import { useState,useRef } from "react"


const Contact =()=>{
  const [message,setMessage] = useState("");
  const [error, setError] = useState(false);

  const textRef = useRef()


  const handleSubmit =(e) => {
 e.preventDefault();
 if(message === ""){
  setError(true)
  textRef.current.focus()
 } else{
  setError(false)
 }
  }
  return (
    <div className='contact'>

       <form  >
           
            <h2>Contact Me</h2> <br />
            <p> Hi there, contact me to ask me about anything you have in mind </p>
            
            <div className="body">
                <div className='persons'>

                <div className="inputs">
                <label>First name</label>
                <input type="text"  placeholder='Enter first your name' id='first_name' />
                </div>
               

                <div className="inputs">
                <label>Last name</label>
                <input type="text"  placeholder='Enter your last name' id='last_name'/> 
                </div>
                
             </div>
             
             <div className= "inputs">

                <label>Email</label> 
                <input type="email" placeholder='yourname@gmail.com' id='email' /> 
                </div> 
                <div className= "inputs">
                <label>Message</label> 
                <textarea name="message" id="message" cols="30" rows="5" 
                placeholder="Send me a message and I'll reply you as soon as possible" 
                onChange={e=>setMessage(e.target.value)} ref={textRef} ></textarea>
                </div>
                {error? <p className='error'>Please enter a message</p> : "" }
     </div>
     
<div className='check'>
     <input type="checkbox" id="" name="" value="" className='box' />
  <label className='checkmessage'> You agree to providing your data to Adewumi who may contact you</label> <br />
  </div>
<button id='btn__submit' type='button' onClick={ e => handleSubmit(e)} >Send message</button>

</form>
<hr />
<div className="footer">
   
        <footer>
        
          <div><img src={vectom} alt="" /></div>
          <p><img src={footertext} alt="" /></p>
          <div><img src={I4G} alt="" /></div>
        </footer>

       </div>

    </div>
  )
}

export default Contact;