// _component/BannerSlider.js
"use client";
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from "/public/Images/HomeImage/banner1.jpg";
import Banner1 from "/public/Images/HomeImage/banner2.jpeg";
import Banner2 from "/public/Images/HomeImage/banner3.jpg";
import Banner3 from "/public/Images/HomeImage/Biz-flights.jpg";
// import Banner4 from "/public/Images/HomeImage/tw-global-travel.jpg";


const banners = [
  {
    image: Banner,
  },
  {
    image: Banner1,
  },
  {
    image: Banner2,
  },
  {
    image: Banner3,
  },
];

export default function HomeBanner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Add fade effect
    arrows: false, // Remove arrows
    dots: false, // Remove dots
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className=" pt-20 ">
            <div className="flex justify-center h-[700px] overflow-hidden">
              <Image className="w-full h-full object-cover" src={banner.image}></Image>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
