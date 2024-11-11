import React from 'react'
import Image from 'next/image'
import Skills from '../skills/page'
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

