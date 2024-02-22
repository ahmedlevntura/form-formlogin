import React, { useEffect } from 'react'
import image1 from '../image/logo1.svg'

export default function Home() {
  useEffect(()=>{
    document.title = "Home";
},[])
  return <>

  <div className=' home vh-100  d-flex justify-content-center align-items-center'>
<div className='item text-center text-light'>
    <img className='w-100' src={image1} alt="" />
    <h1>START FRAMEWORK</h1>
    <div className='content my-3 d-flex gap-3  justify-content-center align-items-center'>
            <div className='before'></div>
            <i class="fa-solid fa-star star "></i>
            <div className='after'></div>
        </div>
    <p>Graphic Artist - Web Designer - Illustrator</p>
</div>

  </div>
  
  
  
  </>
}
