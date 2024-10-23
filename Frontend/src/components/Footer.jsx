import React from 'react'
import logo from '../assests/images/main-logo.png'
import dhl from '../assests/images/dhl.png'
import ship from '../assests/images/shippingcard.png'
import visa from '../assests/images/visa.jpg'
import master from '../assests/images/mastercard.jpg'
import pay from '../assests/images/paypal.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div>
      <div className="container"> 

        <div className="row">
        <div className="col">
                  <img src={logo} alt="logo"/>
                  <p>Nisi, purus vitae, ultrices nunc. Sit ac sit 
                    <br/>suscipit hendrerit. Gravida massa volutpat
                    <br/> aenean odio erat nullam fringilla.</p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-facebook" />                         
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-instagram" />                         
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />                          
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />                                      
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-youtube" />                         
                        </a>
                      </li>
                    </ul>
                  </div>
        </div>
        <div className="col">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-uppercase">
                    <li className="menu-item pb-2">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Shop</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Blogs</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
        </div>
        <div className="col">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Help & Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item pb-2">
                      <a href="#">Track Your Order</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Returns Policies</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Shipping + Delivery</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>             
        </div>
        <div className="col">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <a href="mailto:">yourinfo@gmail.com</a>
                  </p>
                  <p>If you need support? Just give us a call. <a href="">+55 111 222 333 44</a>
                  </p>
                </div>             
        </div>
        </div>

         {/* <div className="row set">
                <div className="col footer-menu">
                  <img src={logo} alt="logo"/>
                  <p>Nisi, purus vitae, ultrices nunc. Sit ac sit 
                    <br/>suscipit hendrerit. Gravida massa volutpat
                    <br/> aenean odio erat nullam fringilla.</p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-facebook" />                         
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-instagram" />                         
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />                          
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />                                      
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-youtube" />                         
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              <div className="col">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-uppercase">
                    <li className="menu-item pb-2">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Shop</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Blogs</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Help & Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item pb-2">
                      <a href="#">Track Your Order</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Returns Policies</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Shipping + Delivery</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <a href="mailto:">yourinfo@gmail.com</a>
                  </p>
                  <p>If you need support? Just give us a call. <a href="">+55 111 222 333 44</a>
                  </p>
                </div>
              </div>
      </div>  */}
      <hr/>
      </div>
    <div id="footer-bottom">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="Shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src={dhl} alt="visa"/>
                <img src={ship} alt="mastercard"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src={visa}alt="visa"/>
                <img src={master} alt="mastercard"/>
                <img src={pay}alt="paypal"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="copyright">
              <p>© Copyright 2024 MiniStore. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer

