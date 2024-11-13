import React from 'react'
import Image from 'next/image'
import Skills from '../skills/page'
const About = () => {
  return (
    <div>
        <h1 className='heading'>ABOUT ME</h1>
        <Image src="/office girl.jpeg" alt="image"  width={200} height={200} className='img1' />
        
        

<Skills/>
    </div>
  )
}

export default About

