import React from "react";
import Button from "../../Components/Button";

export default function Mints (){
return(
    <div className="mints">
        <div className="mint-chd">
            <div className="cover">
                <div> 
<a>  {'>> Buy on OpenSea <<'}</a>
                    </div>
            <div className="head-font dark">Mint your own OG NFT</div>
            <p>Connect your own wallet and mint your own <br /> unique, creative, awesome OG NFT</p>
        <div className="btn-cov">
<p>Max mint - 10</p>
<div className="wrap d-flex ">
    <div className="d-flex me-2 align-items-center add justify-content-between">
        <button className='btn'>+</button>
        <div>1</div>
        <button className='btn'>-</button>
    </div>
    <Button variant='black'>Mint NFT</Button>
</div>
        </div>
        </div>
    </div>
    </div>
)
}