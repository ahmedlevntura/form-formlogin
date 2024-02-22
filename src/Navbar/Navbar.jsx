import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  useEffect(()=>{
    navbar()

  },[])

  function navbar(){
    window.addEventListener('scroll',function(){
      if(this.window.scrollY >=20){
        this.document.querySelector('.navbar').classList.replace('py-4','py-2')
      }
      else{
        this.document.querySelector('.navbar').classList.replace('py-2','py-4')
      }
    })
  }



  return <>
  
  <nav className="navbar navbar-expand-lg py-4 fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?'nav-link active':'nav-link'} to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?'nav-link active':'nav-link'} to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?'nav-link active':'nav-link'} to="contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?'nav-link active':'nav-link'} to="form">Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(x)=>x.isActive?'nav-link active':'nav-link'} to="loginform">loginform</NavLink>
        </li>
      
        
      </ul>
      
    </div>
  </div>
</nav>
  
  </>
}
