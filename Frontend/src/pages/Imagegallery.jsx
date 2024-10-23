import React from 'react'

import item1 from '../assests/images/insta-item1.jpg'
import item2 from '../assests/images/insta-item2.jpg'
import item3 from '../assests/images/insta-item3.jpg'
import item4 from '../assests/images/insta-item4.jpg'
import item5 from '../assests/images/insta-item5.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Imagegallery = () => {
  return (
    <div>
      
    <section id="instagram" class="padding-large overflow-hidden no-padding-top">
      <div class="container">
        <div class="row">
          <div class="display-header text-uppercase text-dark text-center pb-3">
            <h2 class="display-7">Shop Our Insta</h2>
          </div>
          <div class="d-flex flex-wrap">
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src={item1}alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src={item2} alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src={item3} alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src={item4}alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="/" class="image-link position-relative">
                <img src={item5}alt="instagram" class="insta-image"/>
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />                  </svg>
                </div>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Imagegallery



