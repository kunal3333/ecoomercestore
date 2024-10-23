import React from "react";

import MobileProduct from "./MobileProduct";
import Smartwatches from "./Smartwatches";
import Salepage from "./Salepage";
import Blogsection from "./Blogsection";
import Testimonialsection from "./Testimonialsection";
import Newsletter from "./Newsletter";
import Imagegallery from "./Imagegallery";

const Main = () => {
  return (
    <div>
      <MobileProduct />
      <Smartwatches />
      <Salepage />
      <Blogsection />
      <Testimonialsection />
      <Newsletter />
      <Imagegallery />
    </div>
  );
};

export default Main;
