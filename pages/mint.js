import React,  { useState, useEffect } from "react";
import Button from "../Components/Button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaEthereum } from 'react-icons/fa';
import Head from "next/head"
import MetaMaskAuth from "../Layouts/Dashboard/meta";

export default function Mints (){
    const [count, setCount] = useState(0);
    
    const particlesInit = async (main) => {
        console.log(main);
    await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      useEffect(() => {
        document.querySelector('body').classList.add('mint-body')
      })
return(
    <div className=" mint-page" >
      <Head>
        <link className="pick-body" />
      </Head>
        <Particles
height="100%"
style={{}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        fullScreen: false,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    <div className="connect-notify">
      <div className="verify-content">
        <div className="Ghty">
        <p color="#25174E" className=" bWPpuW">Wallet Not Connected</p>
        <p color="#25174E8C" className=" bwhBck">To mint and transfer a Pozzle Planet NFT, you need to first connect your wallet</p>
        </div>
        <div className="ggyh">
        <div className="d-inline-block button-wrapper">
          <button className="button purple " style={{filter:"1px"}}>Connect</button>
          </div>
        </div>
      </div>
    </div>
    <p className="sub-title">CHOOSE A BLOCKCHAIN TO MINT ON</p>
    <div className="chainlist">
      <div className="chain-item">
        <div className="icon-con">
          <FaEthereum size={"50px"} />
        </div>
        <p color="#F8F8F878" class="kfeGnV">1211</p>
        <p style={{minHeight:"20px"}} color="#F8F8F878" class=" hPZZBY">Ethereum</p>
      </div>

      <div className="chain-item">
        <div className="icon-con">
          <img src="img/polygon.svg" size={"50px"} />
        </div>
        <p color="#F8F8F878" class="kfeGnV">151</p>
        <p style={{minHeight:"20px"}} color="#F8F8F878" class=" hPZZBY">Polygon</p>
      </div>
    </div>
    <p transform="uppercase" class="sc-11dd0d4c-0 EBsav">Choose amount to mint</p>
    
    {/* <div className="pt-4 col-12 col-md-6 m-auto"> */}
    {/* <div className="head-font ddb mb-3">Connect your own wallet and mint your free unique OG NFT</div> */}
    
    <div className="wrap d-flex justify-content-center">
        <div className="d-flex me-2 align-items-center add justify-content-between position-absolute">
        <button onClick={() => setCount(count - 1)} style={{border: 'none'}} className='btn'>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)} style={{border: 'none'}} className='btn'>+</button>
    </div>
    </div>
    <div className="wrap d-flex justify-content-center">
        <div className="d-flex mt-5 align-items-center ad justify-content-center position-absolute">
     <Button variant='black' style={{backgroundColor:" #875cff",
    color: "#fff"}}>
     
     <MetaMaskAuth />
     </Button>
      </div>
    </div>
   

    {/* </div> */}
         {/* </Particles> */}
    </div>
)
}