import React from 'react'

import bg from '../assests/images/single-image1.png'
const Salepage = () => {
  return (
    <div>
          <section id="yearly-sale" class="bg-light-blue overflow-hidden " >
      <div class="row d-flex flex-wrap align-items-center">
        <div class="col-md-6 col-sm-12">
          <div class="text-content offset-4 padding-medium">
            <h3>10% off</h3>
            <h2 class="display-2 pb-5 text-uppercase text-dark">New year sale</h2>
            <a href="shop.html" class="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Sale</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <img className='saleset' src={bg}/>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Salepage
