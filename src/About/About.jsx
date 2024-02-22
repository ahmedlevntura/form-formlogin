import React, { useEffect } from 'react'

export default function About() {

    useEffect(()=>{
        document.title = "About";
    },[])
  return <>


  <div className='about vh-100 d-flex justify-content-center align-items-center'>
    <div className='container'>
    <div className='item  text-light'>
        <h1 className='text-center'>ABOUT COMPONENT</h1>
        <div className='content my-3 d-flex gap-3  justify-content-center align-items-center'>
            <div className='before'></div>
            <i class="fa-solid fa-star star "></i>
            <div className='after'></div>
        </div>
        <div className='row g-5'>
            <div className='col-md-6 col-sm-12'>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            </div>
            <div className='col-md-6 col-sm-12'>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            </div>
        </div>
    </div>
    </div>
  </div>
  
  
  
  
  </>
}
