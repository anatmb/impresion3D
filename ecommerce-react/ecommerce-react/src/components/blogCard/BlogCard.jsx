import React from 'react'
import { NavLink, Link } from "react-router-dom";


function BlogCard() {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className="card-image">
          <img src='images/blog-1.jpg' className='img-fluid' alt='' />
        </div>

        <div className="blog-content">
          <p className='date'>9 April, 2023</p>
          <h5 className='title'>

            A beatiful sundy morning renaissance

          </h5>
        
          <p className='desc'> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
          <Link to="/" className="button">Read More</Link>
        </div>
      </div>

    </div>
  )
}

export default BlogCard