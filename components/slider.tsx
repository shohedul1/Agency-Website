'use client';
import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderOne = () => { 
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className:"w-full mx-auto cursor-pointer center-mode",
  }

  if (isMediumScreen) {
    settings.slidesToShow = 1.67

  } else if (isSmallScreen) {
    settings.slidesToShow = 1
  }
  return (
    <div>
      <Slider {...settings}>
        <>
        <div className="px-2 md:py-10 relative w-[500px] h-[500px]">
          <Image alt="logo" width={1000} height={1000} src={"/slick/slick4.jpg"} className="rounded-2xl" />
        </div>
        </>
        <>
        <div className="px-2 md:py-10 relative w-[500px] h-[500px]">
          <Image alt="logo" width={1000} height={1000} src={"/slick/slick5.jpeg"} className="rounded-2xl" />
        </div>
        </>
        <>
        <div className="px-2 md:py-10 relative w-[500px] h-[500px]">
          <Image alt="logo" width={1000} height={1000} src={"/slick/small.jpg"} className="rounded-2xl" />
        </div>
        </>
        <>
        <div className="px-2 md:py-10 relative w-[500px] h-[500px]">
          <Image alt="logo" width={1000} height={1000} src={"/slick/webdesiner.png"} className="rounded-2xl" />
        </div>
        </>
        <>
        <div className="px-2 md:py-10 relative w-[500px] h-[500px]">
          <Image alt="logo" width={1000} height={1000} src={"/slick/webdesing.jpg"} className="rounded-2xl" />
        </div>
        </>

       
       
      </Slider>

    </div>
  )
}

export default SliderOne



