import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link>  
            <img src='images/wish.svg' alt='wish'/> 
          </Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='watch'/>
          <img src='images/watch-1.jpg' className='img-fluid' alt='watch'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className='product-title'>
            Kids Headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            onChange={()=>{}}
            size={24}
            activeColor="#ffd700"
            value={3}
            edit={false}
          />
          <p className='price'>$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-15'>
            <Link>
              <img src='images/prodcompare.svg' alt='prodcompare'/>
            </Link>
            <Link>
              <img src='images/view.svg' alt='view'/>
            </Link>
            <Link>
              <img src='images/add-cart.svg' alt='cart'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;