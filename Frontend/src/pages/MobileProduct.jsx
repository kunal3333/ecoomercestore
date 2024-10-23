import React from 'react'

import { sliderData } from '../utils/mobiledata.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from "react-slick";


const MobileProduct = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section id="mobile-products" class="product-store position-relative padding-large no-padding-top">
        <div class="container">
          <div class="row">
            <div class="display-header d-flex justify-content-between pb-3">
              <h2 class="display-7 text-dark text-uppercase">Mobile Products</h2>
              <div class="btn-right">
                <a href="shop.html" class="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
              </div>
            </div>

            <Slider {...settings}>
              {
                sliderData.map((item, idx) =>
                (
                  <div key={idx} class="product-card relative mx-4 border-2 p-4">
                    <div class="image-holder">
                      <img src={item.img} alt="product-item" class="img-fluid" />
                    </div>
                    <div class="cart-concern absolute bottom-2 left-0">
                      <div class="cart-button d-flex">
                        <a href="#" class="btn btn-medium btn-black">Add to Cart<FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></a>
                      </div>
                    </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        <a href="#">{item.title}</a>
                      </h3>
                      <span class="item-price text-primary">${item.price}</span>
                    </div>
                  </div>
                ))
              }

            </Slider>

          </div>
        </div>
        <div class="swiper-pagination position-absolute text-center"></div>
      </section>
    </div>
  )
}


export default MobileProduct
