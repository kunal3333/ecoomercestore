import React from "react";
import Slider from "react-slick";
import slice from "../index"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
// <div classNameName="Banner-section">
//         <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
//           <div className="swiper main-swiper">
//             <div className="swiper-wrapper">
//               <div className="swiper-slide">
//                 <div className="container">
//                   <div className="row d-flex align-items-center">
//                     <div className="col-md-6">
//                       <div className="banner-content">
//                         <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
//                         <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
//                       </div>
//                     </div>
//                     <div className="col-md-5">
//                       <div className="image-holder">
//                         {/* <img src="images/banner-image.png" alt="banner"> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="swiper-slide">
//                 <div className="container">
//                   <div className="row d-flex flex-wrap align-items-center">
//                     <div className="col-md-6">
//                       <div className="banner-content">
//                         <h1 className="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
//                         <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
//                       </div>
//                     </div>
//                     <div className="col-md-5">
//                       <div className="image-holder">
//                         {/* <img src="images/banner-image.png" alt="banner"> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-icon swiper-arrow swiper-arrow-prev">
//             {/* <svg className="chevron-left">
//               <use xlink:href="#chevron-left" />
//             </svg> */}
//           </div>
//           <div className="swiper-icon swiper-arrow swiper-arrow-next">
//             {/* <svg className="chevron-right">
//               <use xlink:href="#chevron-right" />
//             </svg> */}
//           </div>
//         </section>
//       </div>