import React from 'react'
import logo from '../assests/images/main-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="main-logo" />
            </Link>
            <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
              
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div className="offcanvas-header px-4 pb-0">
                <Link className="navbar-brand" to ="/main"><img src={logo} alt="main-logo" /></Link>
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
              </div>
              <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link me-4 active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link me-4" to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link me-4" to="/products">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link me-4" to="/watches">Watches</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#yearly-sale">Sale</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#latest-blog">Blog</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="about.html" className="dropdown-item">About</a>
                      </li>
                      <li>
                        <a href="blog.html" className="dropdown-item">Blog</a>
                      </li>
                      <li>
                        <a href="shop.html" className="dropdown-item">Shop</a>
                      </li>
                      <li>
                        <a href="cart.html" className="dropdown-item">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                      </li>
                      <li>
                        <a href="single-post.html" className="dropdown-item">Single Post</a>
                      </li>
                      <li>
                        <a href="single-product.html" className="dropdown-item">Single Product</a>
                      </li>
                      <li>
                        <a href="contact.html" className="dropdown-item">Contact</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <div className="user-items ps-5">
                      <ul className="d-flex justify-content-end list-unstyled">
                        <li className="search-item pe-3">
                          <a href="#" className="search-button">
                            <svg className="search">
                              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />                      
                                </svg>
                          </a>
                        </li>
                        <li className="pe-3">
                           <Link to='/Login'> 
                            <svg className="user">
                              <FontAwesomeIcon icon="fa-solid fa-user" />                       
                               </svg>
                           </Link> 
                        </li>
                        <li>
                          {/* <Link to=""> */}
                            <svg className="cart">
                              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />                 
                                     </svg>
                                     {/* </Link> */}
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
  
}

export default Navbar

