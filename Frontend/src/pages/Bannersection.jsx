import React from 'react'
import bannerone from '../assests/images/banner-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from "react-slick";

import { Link } from 'react-router-dom';
const Bannersection = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div classNameName="Banner-section">
                <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
                    <Slider {...settings}>
                        <div>
                            <div className="container">
                                <div className='row'>
                                    <div className='col setb'> 
                                        <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                                        <Link to ="/" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</Link>
                                    </div>
                                    <div className='col'>                                
                                        <img className='set' src={bannerone} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container">
                                <div className='row'>
                                    <div className='col setb'>
                                         <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                                         
                                        <Link to ="/" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</Link>
                                    </div>
                                    <div className='col'>                                
                                        <img className='set' src={bannerone} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>


                <section id="company-services" class="padding-large">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 pb-3">
                                <div class="icon-box d-flex">
                                    <div class="icon-box-icon pe-3 pb-3">
                                        <svg class="cart-outline">
                                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                        </svg>
                                    </div>
                                    <div class="icon-box-content">
                                        <h3 class="card-title text-uppercase text-dark">Free delivery</h3>
                                        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 pb-3">
                                <div class="icon-box d-flex">
                                    <div class="icon-box-icon pe-3 pb-3">
                                        <svg class="quality">
                                            <FontAwesomeIcon icon="fa-regular fa-lightbulb" />
                                        </svg>
                                    </div>
                                    <div class="icon-box-content">
                                        <h3 class="card-title text-uppercase text-dark">Quality guarantee</h3>
                                        <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 pb-3">
                                <div class="icon-box d-flex">
                                    <div class="icon-box-icon pe-3 pb-3">
                                        <svg class="price-tag">
                                            <FontAwesomeIcon icon="fa-solid fa-tag" />
                                        </svg>
                                    </div>
                                    <div class="icon-box-content">
                                        <h3 class="card-title text-uppercase text-dark">Daily offers</h3>
                                        <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 pb-3">
                                <div class="icon-box d-flex">
                                    <div class="icon-box-icon pe-3 pb-3">
                                        <svg class="shield-plus">
                                            <FontAwesomeIcon icon="fa-solid fa-shield" />
                                        </svg>
                                    </div>
                                    <div class="icon-box-content">
                                        <h3 class="card-title text-uppercase text-dark">100% secure payment</h3>
                                        <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Bannersection
