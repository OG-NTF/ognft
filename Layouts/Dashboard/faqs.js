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
                    <Accordion className="acc">
                        <Card className="carr">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="0">
                            Lorem ipsum ipsum ?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="1">
                            
                            Lorem ipsum ipsum ?
                            <FaPlus />

                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="carr mt-5">
                            <Accordion.Toggle as={Card.Header} className="head-font" eventKey="2">
                            Lorem ipsum ipsum ?
                            <FaPlus />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    
                </div>
        </div>
    );
}