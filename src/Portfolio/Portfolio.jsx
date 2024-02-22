import React, { useEffect } from 'react'
import image2 from '../image/logo1 (1).png'
import image3 from '../image/logo2.png'
import image4 from '../image/logo3.png'
import { useState } from 'react'
export default function Portfolio() {

    useEffect(()=>{
        document.title = "Portfolio";
    },[])
// let [imgSrc,setSrc]=useState('')
//     useEffect(()=>{
//         getImage()
//         closeEl()
//     },[])

//     function getImage(){
//         let layers=document.querySelectorAll('.layer')
// console.log(layers)
// layers.forEach((ele)=>{
//     ele.addEventListener('click',function(e){
//         document.querySelector('.outer').classList.remove('d-none')
//         //let imgSrc= e.target.getAttribute('src')
//         console.log(e.target.nextElementSibling)
//          imgSrc=e.target.nextElementSibling.getAttribute('src')
//         console.log(imgSrc)
//         setSrc(imgSrc)


        
//     })
// })
//     }

//     function closeEl(){
//         document.querySelector('.closeX').addEventListener('click',function(){
//             document.querySelector('.outer').classList.add('d-none')
//         })
//     }



  return <>

  {/* <div className='outer d-none '>
    <div className='inner position-relative'>
        <i class="fa-solid fa-x closeX "></i>
        <img className='w-100 h-100' src='' alt="" />
    </div>
  </div> */}


<div class="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img className='w-100' src={image2} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img className='w-100' src={image3} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img className='w-100 rounded'src={image4} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered p-0">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img className='w-100 rounded'src={image4} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img className='w-100 rounded' src={image2} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img className='w-100 rounded'src={image3} alt="" />
      </div>
      
    </div>
  </div>
</div>


  <div className='portfolio py-5 text-center'>
    <div className='container'>
    <h1 className='head'>PORTFOLIO COMPONENT</h1>
    <div className='content my-3 d-flex gap-3  justify-content-center align-items-center'>
            <div className='before2'></div>
            <i class="fa-solid fa-star star "></i>
            <div className='after2'></div>
        </div>

     <div className='row g-4 pb-5'>
        <div className='col-md-4 col-sm-12'data-bs-toggle="modal" data-bs-target="#exampleModal1" >
            <div className='item position-relative ' >
            <div className='layer rounded'>
                <i class="fa-solid fa-plus plus"></i>

            </div>
            <img className='w-100 rounded' src={image2} alt="" />
                
            </div>
        </div>
        <div className='col-md-4 col-sm-12' data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <div className='item position-relative'>
            <div className='layer rounded'>
                <i class="fa-solid fa-plus plus"></i>

                </div>
                <img className='w-100 rounded' src={image3} alt="" />
                
            </div>
        </div>
        <div className='col-md-4 col-sm-12'data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <div className='item position-relative'>
            <div className='layer rounded'>
                <i class="fa-solid fa-plus plus"></i>

                </div>
                <img className='w-100 rounded'src={image4} alt="" />
                
            </div>
        </div>
        <div className='col-md-4 col-sm-12'data-bs-toggle="modal" data-bs-target="#exampleModal4">
            <div className='item position-relative'>
            <div className='layer rounded'>
                <i class="fa-solid fa-plus plus"></i>

                </div>
                <img className='w-100 rounded'src={image4} alt="" />
                
            </div>
        </div>
        <div className='col-md-4 col-sm-12'data-bs-toggle="modal" data-bs-target="#exampleModal5">
            <div className='item position-relative'>
            <div className='layer rounded'>
                <i class="fa-solid fa-plus plus"></i>

                </div>
                <img className='w-100 rounded'src={image2} alt="" />
                
            </div>
        </div>
        <div className='col-md-4 col-sm-12'data-bs-toggle="modal" data-bs-target="#exampleModal6">
            <div className='item position-relative'>
            <div className='layer rounded'>
                <i class="fa-solid fa-plus plus"></i>

                </div>
                <img className='w-100 rounded'src={image3} alt="" />
                
            </div>
        </div>
     </div>




    </div>

    



  </div>
  
  
  
  
  </>
}
