import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header className='nav'>
<div className='logo'>
    <Image src="/logo.png" alt='logo' width={50} height={50} />
</div>

<div className='navigate'>
    <ul>
        <li><Link href="/" className='link'>Home</Link></li>
        <li><Link href="/About" className='link'>About</Link></li>
        <li><Link href="/projects" className='link'>Projects</Link></li>
        <li><Link href="/contact" className='link'>Contact</Link></li>
    </ul>
</div>


<div className='btn'>
    <button className='bt'>Download CV</button>
</div>
    </header>
  )
}

export default Navbar