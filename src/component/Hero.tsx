import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='hero'>

        <div className='img-div'>
            <Image src="/office girl.jpeg" alt="" width={200}  height={200} className="img"/>
        </div>
        <div className='info-div'>
            <h1 className='name'>Hello <br /> i am <br /> DANIA NIAZAM</h1>
        </div>
        <div className='btn2'>
            <button className='bt1'><Link href="/about" className='bt-li'> About Me</Link></button>
            <button className='bt1'><Link href="/contact" className='bt-li'>Contact Me</Link></button>
        </div>

    </div>
  )
}

export default Hero