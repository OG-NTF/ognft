import React, { useState, useEffect }  from "react";
import Button from "../../Components/Button";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Dots from 'react-carousel-dots';

export default function Hero (){
    const data =[
   {
    id:1,  
    img:"./img/carou1.png"
   },
   {
    id:2,  
    img:"./img/carou2.png"
   },
   {
    id:3,  
    img:"./img/carou.png"

   }
    ]
    const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
    return(
<div className="hero">
    <div className="row w-100 justify-content-between">
        <div className='col-12 col-md-6 mb-md-0 mb-5'>
            <div className="head-font">OG NFT</div>
            <p className="hero-tet">The OG NFT is a 10K unit generative art collection illustrating specific Original Gangster “OG” attributes of highly notable individuals that have shaped modern society. 
</p>
<div className="btn-wrap">
    <Button variant='font'>MINT NOW</Button>
    <button className="discord">
    <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2695 0.70575H3.12327C1.67728 0.70575 0.5 1.92697 0.5 3.44028V21.3872C0.5 22.9005 1.67719 24.1217 3.12318 24.1217H17.6336L16.9554 21.666L18.5933 23.2456L20.1415 24.7323L22.8927 27.2545V3.44028C22.8927 1.92697 21.7155 0.70575 20.2695 0.70575ZM15.3303 18.0422C15.3303 18.0422 14.8697 17.4713 14.4858 16.9669C16.1621 16.4757 16.8019 15.3872 16.8019 15.3872C16.2772 15.7456 15.7782 15.9979 15.3303 16.1703C14.6906 16.4492 14.0763 16.6349 13.475 16.7412C12.2465 16.9801 11.1205 16.9138 10.1609 16.7279C9.43144 16.5818 8.80444 16.3695 8.27988 16.1572C7.98554 16.0376 7.66565 15.8916 7.34568 15.7058C7.30737 15.6792 7.26897 15.666 7.23057 15.6394C7.20503 15.6261 7.19217 15.6129 7.1794 15.5996C6.94909 15.4669 6.82112 15.374 6.82112 15.374C6.82112 15.374 7.43534 16.4359 9.06038 16.9403C8.67656 17.4448 8.20308 18.0421 8.20308 18.0421C5.37513 17.9491 4.30037 16.0244 4.30037 16.0244C4.30037 11.7501 6.14295 8.2854 6.14295 8.2854C7.98554 6.85176 9.73855 6.89159 9.73855 6.89159L9.86652 7.05094C7.56331 7.74104 6.50123 8.78984 6.50123 8.78984C6.50123 8.78984 6.78272 8.63059 7.25611 8.40491C8.6253 7.78096 9.71301 7.60846 10.1609 7.56862C10.2376 7.55529 10.3016 7.54204 10.3784 7.54204C11.2359 7.42615 12.1037 7.41726 12.9632 7.51554C14.1787 7.66155 15.4839 8.03323 16.8146 8.78984C16.8146 8.78984 15.8038 7.7943 13.6285 7.10402L13.8076 6.89168C13.8076 6.89168 15.5606 6.85176 17.4032 8.28549C17.4032 8.28549 19.2459 11.7501 19.2459 16.0244C19.2459 16.0244 18.1582 17.9491 15.3303 18.0421V18.0422ZM9.38027 11.843C8.65093 11.843 8.07519 12.5067 8.07519 13.3164C8.07519 14.1262 8.6637 14.7898 9.38027 14.7898C10.1097 14.7898 10.6854 14.1262 10.6854 13.3164C10.6983 12.5067 10.1097 11.843 9.38035 11.843H9.38027ZM14.0508 11.843C13.3214 11.843 12.7456 12.5067 12.7456 13.3164C12.7456 14.1262 13.3342 14.7898 14.0508 14.7898C14.7801 14.7898 15.3559 14.1262 15.3559 13.3164C15.3559 12.5067 14.7801 11.843 14.0508 11.843Z" fill="black"/>
</svg>

    </button>
</div>
<div className="d-flex info justify-content-between">
    <div>37k+
        <p>Artworks</p>
    </div>
    <div>20k+
        <p>Artists</p>
    </div>
    <div>99k+
        <p>Auctions</p>
    </div>
</div>
        </div>
        <div className="col-sm-12 col-md-5 m-auto m-md-0 slide">
          <div className='slide-wrap'>
             {people.map((person, personIndex) => {
          const { id, img} = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={img} alt='' className='person-img' />
            </article>
          );
        })}
          </div>
          <div className="d-flex align-items-center justify-content-between" style={{
            marginTop: '105px'
          }}>
            <div className="d-flex">
              <div className="hero-btn" onClick={() => setIndex(0)}></div>
              <div className="mx-2 hero-btn" onClick={() => setIndex(1)}></div>
              <div className="hero-btn" onClick={() => setIndex(2)}></div>
            </div>
            <div className="see">See All Items</div>
          </div>
       
        </div>
        
    </div>
</div>  
    )
}