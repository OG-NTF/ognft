

import react , {useEffect} from "react"
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Meet(){

  // useEffect(()=>{
  //   function ope(){

  //   }
  // })
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  return(
    <div className="meet">
      <div className="col-10 row justify-content-between m-auto">
        <div className="head-font col-12 col-md-4 text-start">Meet the <p style={{color: ' #9CFF00'}}> OG’s</p> </div>
        <div className="col-12 col-md-5 mt-3 mt-md-0 meet-tet">Every individual making a positive impact to society is an OG, and we are taking the step to acknowledge them with the “OG” classical NFT collection. 
<div className=" ahh">
  <a>See All Collections</a>
</div>
</div>
      </div>
        <Slider {...settings}>
          <div>
            <img className="img-fluid " style={{height: "300px" , width: "90%", objectFit: "cover"}} src="/img/nft.jpg" />
          </div>
          <div>
            <img className="img-fluid " style={{height: "300px" , width: "90%", objectFit: "cover"}} src="/img/oas.PNG" />
          </div>
          <div>
            <img className="img-fluid " style={{height: "300px" , width: "90%", objectFit: "cover"}} src="/img/og.jpeg" />
          </div>
          <div>
            <img className="img-fluid " style={{height: "300px" , width: "90%", objectFit: "cover"}} src="/img/nft.jpg" />
          </div>
        </Slider>
    </div>
  )
}


