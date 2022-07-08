import React, {useState} from "react";
import Button from "../../Components/Button";
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa';
import MetaMaskAuth from "./meta";

export default function Header (){
    const [isInputVisible, setInputVisible] = useState(false);
    
    return(
<div className="header">
    <div className="nav col-10 col-md-10 row align-items-center justify-content-between m-auto">
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
            <li> <Link href='#story'>
            <a>ABOUT </a>
            </Link>
                </li>
            <li>  <Link href='mint'>
    <a>  MINT</a>
      </Link></li>
            
        </ul>
        <div className=" d-md-block d-none">
             <Button variant='white'>

       <MetaMaskAuth />
</Button>
        </div>
       

<FaBars onClick={()=>setInputVisible(true)} className="d-md-none d-block" style={{fontSize:"30px"}} />

{
    isInputVisible && <>
    <div className="sidebar">
<FaTimes onClick={()=>setInputVisible(false)} />
        
<ul className="p-0">
            <li className="ms-0 pb-3" onClick={()=>setInputVisible(false)}>
                <Link href='#roadmap'>
                <a>ROADMAP </a>
                </Link>
                </li>
            <li className="ms-0 pb-3" onClick={()=>setInputVisible(false)}>
                 <Link href='#story'>
            <a>ABOUT </a>
            </Link>
                </li>
            <li className="ms-0 pb-3" onClick={()=>setInputVisible(false)}>
                  <Link href='#mint'>
    <a>  MINT</a>
      </Link></li>
           <Button variant='black'>
       <MetaMaskAuth />
</Button> 
        </ul>
        
    </div>
    </> 
}
</div>

    </div>
</div>
    )
}