import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';

export default function Faqs (){
    return(
        <div className="faq">
            <div className="head-font">FAQs</div>
            <p>Wanna Ask Something?</p>

            <div>
                    <Accordion className="acc col-md-8 col-12">
                        <Card className="carr">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="0">
                            What is an NFT?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                NFTs (Non-Fungible tokens) are <b> individual tokens with valuable information stored in them. </b>Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. 
                                 </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="1">
                            What is our Mint price?
                            <FaPlus />

                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                0.07 ETH
                                      </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="2">
                            What is the Mint date?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                20 June 2022 UTC +1 (12:00AM)
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="3">
                            What is the Total Number of available mint?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                10K units
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="4">
                            On what Blockchain Network will OG NFT Society be on?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                It will be on Ethereum Blockchain
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="5">
                            Who Holds the IP rights of OG NFT Society?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                Yes, holders of OG NFT Society will get IP rights of their NFTs
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="6">
                            Does this project have any utilities? 
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                Yes, buying OG NFT Society art welcomes you to an exclusive membership access to future OG NFT utilities which include Merch Drop for all holders of OG NFT art. Exclusive future access to  airdrop of OG NFT tokens to members. Exploring the metaverse and other future utilities 

                                   </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="7">
                            How do I get whitelisted?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                Join our discord server and follow us on all social media platforms.
                                   </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    
                </div>
        </div>
    );
}