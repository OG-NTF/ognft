import React,  { useState } from "react";
import Button from "../../Components/Button";
import Link from 'next/link'


export default function Mints (){
    const [count, setCount] = useState(0);
return(
    <div className="mints">
        <div className="mint-chd col-md-10 col-11 m-auto row justify-content-between">
    
                  <div className="col-md-6 col-12" style={{paddingTop: "87px"}}>   
            <div className="head-font mb-3" style={{textAlign: "left", marginTop: '31px'}}>Mint your own OG NFT</div>
            <p>Connect your own wallet and mint your own <br className="
            d-none d-md-block" /> unique, creative, awesome OG NFT</p>
        <div className="btn-cov">
{/* <p>Max mint - 10</p> */}
{/* <div className="wrap d-flex ">
    <div className="d-flex me-2 align-items-center add justify-content-between">
        <button onClick={() => setCount(count - 1)} style={{border: 'none'}} className='btn'>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)} style={{border: 'none'}} className='btn'>+</button>
    </div> */}
    <Button variant='black' style={{width:"50%"}}>
    <Link href='mint'>
    <a>  MINT NOW</a>
      </Link>
    </Button>
{/* </div> */}
        </div>
       </div>
       <div className="col-md-5 col-12 text-end">
           <div className="">
               <a> {`>> Buy on OpenSea <<`} </a>
           </div>
           <img src="/img/carou.png" />
       </div>
    </div>
    </div>
)
}