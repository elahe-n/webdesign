import React from 'react'
import portrait from '../assets/b4.jpg'

function home() {
  return (
    <>
    <div className='banner'>
    {/* <img className="elaheimg" src={portrait} alt="Elahe Nourkami" /> */}
    <div className='title'><h1>Web Design</h1></div>
    
    </div>
    <article>
    <br/>
    <section id='Skills' className="Skills">
        <h3>What is Web Design?</h3>
        <p>
       Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s overall functionality. Web design also includes web apps, mobile apps, and user interface design. 
        </p> 
      </section> 

      <br/>
      <section id="Experience" className="Experience">
        <h3>History</h3>
        <p>
          Although web design has a fairly recent history. It can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint. It has become a large part of people's everyday lives. It is hard to imagine the Internet without animated graphics, different styles of typography, background, videos and music.
        </p> 
      </section> 
      <br/>
      <br/>
      <br/>

</article>
</>
  )
}

export default home
