import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='hero'
      style={{ backgroundImage: "url() " }}>

        <div className='img-div'>
            <Image src="/office girl.jpeg" alt="" width={200}  height={200} className="img"/>
        </div>
        <br />
        <div>
        <div className='info-div'>
            <h1 className='name'>Hello!  <br /><span>I am</span>    Dania </h1>
            
        </div>
      
        
      
        <div className='btn'>
            <button className='bt1'><Link href="/About" className='bt-li'> About Me</Link></button>
            <button className='bt1'><Link href="/contact" className='bt-li'>Contact Me</Link></button>
            </div>
        </div>
        

    </div>
  )
}

export default Hero