import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../header/Header";
import Footer from '../footer/footer';


function Layout() {
  return (
    <>
     <Header/>
       <Outlet/>
      <Footer/>
    
    </>
  )
}

export default Layout