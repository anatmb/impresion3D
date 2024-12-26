import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';


function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white mb-0">Free Shipping over $100 & Free Returns</p> </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">HotLine: <a className="text-white" href="tel: +91 3456787687"> +91 3456787687 </a></p>
            </div>
          </div>
        </div>

      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">Shopping-Ecuador</Link>
              </h2>
            </div>
            <div className="col-5">

              <div class="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Search Product...."
                  aria-label="Search Product...."
                  aria-describedby="basic-addon2" />
                <span class="input-group-text p-3" id="basic-addon2"><BsSearch className="fs-6" /></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">

                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src='images/compare.svg' alt='compare' />
                    <p className="mb-0">Compare <br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src='images/wishlist.svg' alt='compare' />
                    <p className="mb-0">Favorite <br /> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src='images/user.svg' alt='user' />
                    <p className="mb-0">Login <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src='images/cart.svg' alt='cart' />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>

                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">

                <Dropdown>
                  <Dropdown.Toggle type="button" className="header-bottom bg-transparent border-5 dropdown" variant="secondary" id="dropdown-basic">
                   <img src="images/menu.svg" alt="menu"/><span className="me-2 d-inline-block" > Shop Categories </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item className="text-white dropdown-item" href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item className="text-white dropdown-item"  href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item className="text-white dropdown-item"  href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">Home</NavLink>
                    <NavLink className="text-white" to="/">Our Store</NavLink>
                    <NavLink className="text-white" to="/">Blog</NavLink>
                    <NavLink className="text-white" to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header