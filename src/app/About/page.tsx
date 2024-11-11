import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
        <h1 className='heading'>About me</h1>
        <Image src="/office girl.jpeg" alt="image"  width={200} height={200} className='img1' />
        <h2></h2>
        <p></p>
<div className='btn3'>
  <button className='bt2'></button>
  <button className='bt2'></button>
  <button  className='bt2' ></button>
  <button className='bt2'> </button>
  <button className='bt2'></button>
</div>
<Skills/>
    </div>
  )
}

export default About

export const Skills=()=>{
  return(
    <div>
      
        <h1 className='heading'>MY SKILLS</h1>
      <div>
        <h2 className='skill-h2'>HTML</h2>
        <div className='bar'></div>
      </div>

      <div>
        <h2 className='skill-h2'>CSS</h2>
        <div className='bar1'></div>
      </div>

      <div>
        <h2 className='skill-h2'>JAVASCRIPT</h2>
        <div className='bar2'></div>
      </div>


      <div>
        <h2 className='skill-h2'>TYPESCRIPT</h2>
        <div className='bar3'></div>
      </div>

      <div>
        <h2 className='skill-h2'>NEXT JS</h2>
        <div className='bar4'></div>
      </div>

      <div>
        <h2 className='skill-h2'>FIGMA</h2>
        <div className='bar5'></div>
      </div>
    </div>

    
  )
}