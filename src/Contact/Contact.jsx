import React, { useEffect } from 'react'

export default function Contact() {
useEffect(()=>{
  contactEffect('.nameEl','.labelname')
  contactEffect('.ageEl','.labelage')
  contactEffect('.emailEl','.labelemail')
  contactEffect('.passEl','.labelpass')
  document.title = "Contact";
},[])


function contactEffect(type,label){
  // let nameEl=document.querySelector('.nameEl')
  // let labelname=document.querySelector('.labelname')
  document.querySelector(type).addEventListener('keyup',function(){
    if(document.querySelector(type).value.length > 0){
      //console.log('hello')
      document.querySelector(label).style.top='-27px'


    }
    else{
      document.querySelector(label).style.top='0'
    }
  })
}
  





  return<div className='contact py-5'>
    <div className='container'>
    <h1 className='text-center head'>CONATCT STION</h1>
    <div className='content my-3 d-flex gap-3  justify-content-center align-items-center'>
            <div className='before2'></div>
            <i class="fa-solid fa-star star "></i>
            <div className='after2'></div>
        </div>
     <form className='py-5 w-75 mx-auto' action="">
      <div className='name position-relative'>
      <label className='d-block labelname' htmlFor="">userName : 
      
      </label>
      <input className='nameEl' type="text"placeholder='userName' />
      </div>
      <div className='age position-relative my-5'>
      <label className='d-block labelage' htmlFor="">userAge :</label>
      <input className='ageEl' type="text"placeholder='userAge' />
      </div>
      <div className='email position-relative mb-5'>
      <label className='d-block labelemail' htmlFor="">userEmail :</label>
      <input className='emailEl' type="text"placeholder='userEmail' />
      </div>
      <div className='pass position-relative'>
      <label className='d-block labelpass' htmlFor="">userPassword :</label>
      <input className='passEl' type="text"placeholder='userPassword' />
      </div>
      <button className='btn my-5 message' type='button'>Send Message</button>
      {/* <input type="text"placeholder='userAge' />
      <input type="password"placeholder='userPassword' /> */}
     </form>
    </div>
  </div>
}
