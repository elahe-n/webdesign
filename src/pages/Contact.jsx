import React from 'react'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import { Button } from 'react-bootstrap'
import Card from '../components/Card'

function contact() {
  return (
    <Card>
    <section className='getInTouch'>
        <form id="form">   
        <h2>Get in touch</h2>  
        <div className="inputArea" >     
            <input className="input-group" type="text" placeholder="Your Name" id="name"></input>
            <input className="input-group" type="email" placeholder="Your Email" id="Email"></input>
        </div>
            <textarea className="messageTextarea input-group" placeholder="Your message" id="message"></textarea>
            <br/>
            <Button className="mx-2"  type="submit">Submit</Button>
          
        </form>  
        <div className='socail'>
            <a href='https://www.linkedin.com/'><img className="socialLogo" src={linkedin} alt="Linkedin" /></a>
            <a href='https://www.twitter.com/'><img className="socialLogo" src={twitter} alt="twitter" /></a>
            <a href='https://www.facebook.com/'><img className="socialLogo" src={facebook} alt="facebook" /></a>      
        </div>
     </section>

     </Card>
  )
}

export default contact
