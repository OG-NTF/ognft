import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import   'react-multi-carousel/lib/styles.css';

export default function Meet (props){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3 ,
          // slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          // slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          // slidesToSlide: 1
        }
      };
     
return(
<div className="meest">
<Carousel 
       additionalTransfrom={0}
       arrows
       autoPlaySpeed={3000}
       centerMode={false}
       className=""
       containerClass="container-with-dots"
       dotListClass=""
       draggable
       focusOnSelect={false}
       infinite
       itemClass=""
       keyBoardControl
       minimumTouchDrag={80}
       renderButtonGroupOutside={false}
       renderDotsOutside={false}
       responsive={{
         desktop: {
           breakpoint: {
             max: 3000,
             min: 1024
           },
           items: 3,
           partialVisibilityGutter: 40
         },
         mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 1,
           partialVisibilityGutter: 30
         },
         tablet: {
           breakpoint: {
             max: 1024,
             min: 464
           },
           items: 2,
           partialVisibilityGutter: 30
         }
       }}
       showDots={false}
       sliderClass=""
       slidesToSlide={1}
       swipeable
        // draggable={true}
        // showDots={true}
        // responsive={responsive}
        // additionalTransfrom={0}
        // infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={3000}
        // keyBoardControl={true}
        // slidesToSlide={1}
        // minimumTouchDrag={80}
        // // minimumTouchDrag={80}
        // // swipeable
        // transitionDuration={1000}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
       >
  <div className="w-100">
      <img src="/img/carou.png" />
  </div>
  <div className="w-100">
  <img src="/img/carou1.png" />
  </div>
  <div className="caro">
  <img src="/img/carou2.png" alt="" />
  </div>
  <div className="w-100">
  <img src="/img/carou1.png" />
  </div>

  <div className="w-100">
  <img src="/img/carou2.png" />
  </div>
  <div className="w-100">
  <img src="./img/carou.png" />
  </div>
  <div className="w-100">
  <img src="./img/carou1.png" />
  </div>
  <div className="w-100">
  <img src="./img/carou.png" />
  </div>
  <div className="w-100">
  <img src="/img/carou2.png" />
  </div>
</Carousel>
    <div className="col-10 row justify-content-between m-auto">
        <div className="head-font col-12 col-md-4 text-left">Meet the <p style={{color: "#9CFF00;"}}>OG’s</p> </div>
        <div className="col-12 col-md-5 mt-3 mt-md-0 meet-tet">Every individual making a positive impact to society is an OG, and we are taking the step to acknowledge them with the “OG” classical NFT collection. 
</div>
    </div>
     
     <div className="text-center ahh"> <a>See All Collections</a>  </div>

     <div className='w-100'>
       {/* <Carousel 
       additionalTransfrom={0}
       arrows
       autoPlaySpeed={3000}
       centerMode={false}
       className=""
       containerClass="container-with-dots"
       dotListClass=""
       draggable
       focusOnSelect={false}
       infinite
       itemClass=""
       keyBoardControl
       minimumTouchDrag={80}
       renderButtonGroupOutside={false}
       renderDotsOutside={false}
       responsive={{
         desktop: {
           breakpoint: {
             max: 3000,
             min: 1024
           },
           items: 3,
           partialVisibilityGutter: 40
         },
         mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 1,
           partialVisibilityGutter: 30
         },
         tablet: {
           breakpoint: {
             max: 1024,
             min: 464
           },
           items: 2,
           partialVisibilityGutter: 30
         }
       }}
       showDots={false}
       sliderClass=""
       slidesToSlide={1}
       swipeable
        // draggable={true}
        // showDots={true}
        // responsive={responsive}
        // additionalTransfrom={0}
        // infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={3000}
        // keyBoardControl={true}
        // slidesToSlide={1}
        // minimumTouchDrag={80}
        // // minimumTouchDrag={80}
        // // swipeable
        // transitionDuration={1000}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
       >
  <div className="w-100">
      <img src="/img/carou.png" />
  </div>
  <div className="w-100">
  <img src="/img/carou1.png" />
  </div>
  <div className="caro">
  <img src="/img/carou2.png" alt="" />
  </div>
  <div className="w-100">
  <img src="/img/carou1.png" />
  </div>

  <div className="w-100">
  <img src="/img/carou2.png" />
  </div>
  <div className="w-100">
  <img src="./img/carou.png" />
  </div>
  <div className="w-100">
  <img src="./img/carou1.png" />
  </div>
  <div className="w-100">
  <img src="./img/carou.png" />
  </div>
  <div className="w-100">
  <img src="/img/carou2.png" />
  </div>
</Carousel> */}
     </div>
    

</div>
)
}