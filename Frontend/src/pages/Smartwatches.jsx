import React from 'react'

import { watchData } from '../utils/watchdata.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from "react-slick"


const Smartwatches = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
       <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase ">Go to Shop</a>
            </div>
          </div>
          <Slider {...settings}>
{
          watchData.map((item,id) =>
          (
                <div key={id} className="product-card relative mx-4 border-2 p-4">
                  <div className="image-holder">
                    <img src={item.img}alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern absolute bottom-2 left-0">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black p">Add to Cart
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">{item.title}</a>
                    </h3>
                    <span className="item-price text-primary">${item.price}</span>
                  </div>
                </div>
          ))
          }
          </Slider>
          </div>
            </div>

      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
    </div>
  )
}

export default Smartwatches
