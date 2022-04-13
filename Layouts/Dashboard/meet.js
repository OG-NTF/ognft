import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Meet (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 0
        }
      };
     
return(
<div className="meet">
    <div className="col-10 row justify-content-between m-auto">
        <div className="head-font col-4 text-left">Meet the <p style={{color: "#9CFF00;"}}>OG’s</p> </div>
        <div className="col-5 meet-tet">Every individual making a positive impact to society is an OG, and we are taking the step to acknowledge them with the “OG” classical NFT collection. 
</div>
    </div>
     
     <div className="text-center ahh"> <a>See All Collections</a>  </div>

     <div className='my-own-custom-container'>
       <Carousel responsive={responsive}>
  <div>
      <img src="/img/carou.png" />
  </div>
  <div className="caro">
  <img src="/img/carou2.png" alt="" />
  </div>
  <div>
  <img src="/img/carou1.png" />
  </div>
  <div>
  <img src="/img/carou2.png" />
  </div>
  <div>
  <img src="./img/carou.png" />
  </div>
  <div>
  <img src="./img/carou1.png" />
  </div>
  <div>
  <img src="./img/carou.png" />
  </div>
</Carousel>
     </div>
    

</div>
)
}