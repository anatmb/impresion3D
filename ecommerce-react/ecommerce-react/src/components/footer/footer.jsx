import React from 'react';
import { BsSearch } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import {BsLinkedin, BsGithub  } from 'react-icons/bs';

function footer() {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className='footer-top-data d-flex gap-30 aligment-center'>
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
              </div>

            </div>
            <div className="col-7">

              <div class="input-group">
                <input type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2" />
                <span class="input-group-text p-1" id="basic-addon2">
                  Subscribe
                </span>
              </div>


            </div>
          </div>
        </div>



      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4' >Contact Us</h4>
              <div className='text-white fs-5' >
                <address>Street 123 Av,New York <br/>USA</address>
               <a href="tel:+91 8264954234" className='mt-4 d-block mb-2 text-white'> +91 8264954234</a>
               <a href="mailto:mikjurado1@gmail.com" className='mt-2 d-block mb-0  text-white'>mikjurado1@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                  <BsLinkedin className=' fs-4'/>
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className=' fs-4' />
                  </a>
                </div>
             
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Schipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
           
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>


      </footer>
   
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="col-12 mb-0 text-white">
            <p className='text-center'> &copy;{new Date().getFullYear()}; Powered by Michael Jurado</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default footer