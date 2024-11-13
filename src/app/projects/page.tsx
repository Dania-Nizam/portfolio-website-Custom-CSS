import React from 'react'
import Image from 'next/image'
const Project = () => {
  return (
    <div>
        <h1 className='heading'> My Projects</h1>
        <div className='project'>
           
            <p className='pro-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi labore aut omnis in quos odit voluptatum velit reiciendis earum! Modi in cumque odit officiis, voluptates tenetur optio! Iure, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis ad necessitatibus, cupiditate quidem dolor quod eos quisquam tenetur, soluta tempora aut. Facilis corporis nobis ipsum laborum iste reiciendis nisi.</p>
        </div >
        <div className='main'>
        <div className='card'>
            <Image src="/ct.png"  alt="" width={200} height={200} className='img2'/>
            <h3 className='card-h'>Count Down Timer</h3>
            <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam sunt omnis id sint rerum harum eos maxime. Ab temporibus nihil, vel nam ex modi cum tenetur corrupti. Ducimus, officia?</p>
            <div className='tag-btn'>
                <button className='tag1'>Next JS</button>
                <button className='tag3'>Typescript</button>
                <button className='tag4'>Tailwind CSS</button>
            </div>
        </div>

        <div className='card'>
            <Image src="/wa.png"  alt="" width={200} height={200} className='img2'/>
            <h3 className='card-h'>Weather App</h3>
            <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam sunt omnis id sint rerum harum eos maxime. Ab temporibus nihil, vel nam ex modi cum tenetur corrupti. Ducimus, officia?</p>
            <div className='tag-btn'>
                <button className='tag1'>Next JS</button>
                <button className='tag3'>Typescript</button>
                <button className='tag4'>Tailwind CSS</button>
            </div>
        </div>

        <div className='card'>
            <Image src="/cv.png"  alt="" width={200} height={200} className='img2'/>
            <h3 className='card-h'>Resume Builder</h3>
            <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam sunt omnis id sint rerum harum eos maxime. Ab temporibus nihil, vel nam ex modi cum tenetur corrupti. Ducimus, officia?</p>
            <div className='tag-btn'>
                <button className='tag2'>Html</button>
                <button className='tag3'>Typescript</button>
                <button className='tag4'>Tailwind CSS</button>
            </div>
        </div>

        <div className='card'>
            <Image src="/figma 1.png"  alt="" width={200} height={200} className='img2'/>
            <h3 className='card-h'>Figma design</h3>
            <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam sunt omnis id sint rerum harum eos maxime. Ab temporibus nihil, vel nam ex modi cum tenetur corrupti. Ducimus, officia?</p>
            <div className='tag-btn'>
                <button className='tag1'>Next JS</button>
                <button className='tag2'>Html</button>
                <button className='tag4'>Tailwind CSS</button>
                <button className='tag5'>Figma</button>
            </div>
        </div>

        <div className='card'>
            <Image src="/drb.png"  alt="" width={200} height={200} className='img2'/>
            <h3 className='card-h'>Resume Builder</h3>
            <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam sunt omnis id sint rerum harum eos maxime. Ab temporibus nihil, vel nam ex modi cum tenetur corrupti. Ducimus, officia?</p>
            <div className='tag-btn'>
                <button className='tag2'>Html</button>
                <button className='tag3'>Typescript</button>
                <button className='tag4'>CSS</button>
                <button className='tag6'>JAVASCRIPT</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project