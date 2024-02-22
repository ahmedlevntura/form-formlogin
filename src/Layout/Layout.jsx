import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Copy from '../Copy';

export default function Layout() {
  return <>
  <Navbar/>


  <Outlet/>


  <Footer/>
  <Copy/>

  
  
  </>
}
