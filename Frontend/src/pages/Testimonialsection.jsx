import React from 'react'
import Slider from "react-slick"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Testimonialsection = () => {


  // ('.swiper-wrapper').slick({
  //     dots: true,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     navigation: {
  //         nextEl: ".swiper-arrow-prev",
  //         prevEl: ".swiper-arrow-next",
  //       },
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   });


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <section id="testimonials" className="position-relative">
        <div className="container">
          <div className="row">
            <div className="review-content position-relative">
              {/* <div className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center">
                <svg className="chevron-left">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                </svg>
              </div> */}
              {/* <div className="swiper testimonial-swiper">
                <div className="quotation text-center">
                  <svg className="quote">
                    <FontAwesomeIcon icon="fa-solid fa-quote-left" />                </svg>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide text-center d-flex justify-content-center">
                    <div className="review-item col-md-10">
                      <i className="icon icon-review"></i>
                      <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                      <div className="rating">
                        <svg className="star star-fill">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-fill">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-fill">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-half">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-empty">
                          <FontAwesomeIcon icon="fa-regular fa-star" />                      </svg>
                      </div>
                      <div className="author-detail">
                        <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide text-center d-flex justify-content-center">
                    <div className="review-item col-md-10">
                      <i className="icon icon-review"></i>
                      <blockquote>“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                      <div className="rating">
                        <svg className="star star-fill">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-fill">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-fill">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-half">
                          <FontAwesomeIcon icon="fa-solid fa-star" />                      </svg>
                        <svg className="star star-empty">
                          <FontAwesomeIcon icon="fa-regular fa-star" />                      </svg>
                      </div>
                      <div className="author-detail">
                        <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <Slider {...settings} className='flex w-[70%] m-auto justify-center gap-8'>
                <div className='text-center'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid id magni natus architecto quisquam minima deserunt magnam necessitatibus, consequuntur sint ipsam minus ullam labore error?
                  </p>
                  <div>
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                  </div>
                </div>

                <div className='text-center'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid id magni natus architecto quisquam minima deserunt magnam necessitatibus, consequuntur sint ipsam minus ullam labore error?
                  </p>
                  <div>
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                  </div>
                </div>


                <div className='text-center'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid id magni natus architecto quisquam minima deserunt magnam necessitatibus, consequuntur sint ipsam minus ullam labore error?
                  </p>
                  <div>
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                  </div>
                </div>


                <div className='text-center'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid id magni natus architecto quisquam minima deserunt magnam necessitatibus, consequuntur sint ipsam minus ullam labore error?
                  </p>
                  <div>
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                    <i className='bi bi-star-fill' />
                  </div>
                </div>
          </Slider>

          {/* <div className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center">
            <svg className="chevron-right">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />              </svg>
          </div> */}
        </div>
    </div>
        </div >
  <div className="swiper-pagination"></div>
      </section >
    </div >
  )
}

export default Testimonialsection



