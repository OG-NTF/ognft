import React from "react";
import Button from "../../Components/Button";
import Link from 'next/link'

export default function Header (){
    return(
<div className="header">
    <div className="nav col-12 col-md-10 row align-items-center justify-content-between m-auto">
<div className="col-md-2 col-2">
     <img src="./img/logo.png" />
</div>
       
        <div className="d-flex col-7 col-md-10 ennd align-items-center justify-content-between">
        <ul className=" d-md-flex d-none p-0">
            <li className="ms-0">
                <Link href='#roadmap'>
                <a>ROADMAP </a>
                </Link>
                </li>
            <li> <Link href='#about'>
            <a>ABOUT </a>
            </Link>
                </li>
            <li>  <Link href='#mint'>
    <a>  MINT</a>
      </Link></li>
            
        </ul>
        <Button variant='white'>
CONNECT WALLET</Button>

</div>

    </div>
</div>
    )
}