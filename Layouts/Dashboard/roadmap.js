import React, { useLayoutEffect, useState } from "react"

export default function Faqs() {
    const data = [
        {
            date: "Jan 2022",
            title: "Product Art Development",
            text: "The OG NFT is a celebration of art, the art of being an OG! The art to have birthed a new ideology, invention or creative art that has left a positive mark on the lives of many. Towards achieving this feat, We are focused on modeling and art development of the OG NFT Character"
        },
        {
            date: "Jan 2022",
            title: "Primary Sales & Minting Website Launch",
            text: "We are launching the OG NFT website, activating the primary sales minting and presales minting"
        },
        {
            date: "Jan 2022",
            title: "Deploying Arts and Sales",
            text: "OG NFT belongs out there, for the whole world. We are deploying to IPFS storage and launching the OG NFT collection on OpenSea as our Secondary Sales platform for you to Ape in!"
        },
        {
            date: "Jan 2022",
            title: "Partnership and Merch Availability",
            text: "We are a community, and to that effect we are family. We will make available utility merch that speaks for us all! And we will execute partnership deals with personalities and organizations"
        },
        {
            date: "Jan 2022",
            title: "The Metaverse",
            text: "The OG NFT community will embrace the metaverse, we understand how much you could value your NFTs and we will ensure its continuous priceless value by exploring the Metaverse via OG NFT Game-to-Earn!"
        },
    ]

    const [activeRoadmap , setActiveRoadmap] = useState(-1)
    useLayoutEffect(() => {
        if (window && document) {
            window.addEventListener("scroll", function () {
                handleActiveMenu();
            });
        }
    }, []);

    function elementIsVisible({ ele, id }) {
        const vHeight = window.innerHeight || document.documentElement.clientHeight;

        if (ele) {
            try {
                const { top, bottom } = ele?.getBoundingClientRect();

                return (top > 0 || bottom > 0) && top < vHeight;
            } catch (error) {
                // console.log(error);
            }
        } else if (id) {
            let elem = document.querySelector(id);
            let top = elem.getBoundingClientRect().top;
            let bottom = elem.getBoundingClientRect().bottom;

            return (top > 0 || bottom > 0) && top < vHeight;
        }
    }

    const handleActiveMenu = () => {
        let screenHeight = Math.min(
            window.innerHeight,
            document.documentElement.clientHeight
        );

        // get each element ref
        for (var i = 0; i < data?.length; i++) {
            // get each element position
            try {
                var position = document
                .querySelector(`.roadmap_item${i}`)
                if(position){
                    position = position?.getBoundingClientRect();
                }
                if(i==0){
                console.log(position.top , screenHeight)
                }
                if (
                    (screenHeight /2)  >=   position.top 
                    &&
                    elementIsVisible({ ele: document.querySelector(`.roadmap_item${i}`) })
                ) {
                    console.log(`${i} is visible`)
                    setActiveRoadmap(i);
                }
            } catch (error) {
                // console.log(error, "top");
            }
        }
    };




    return (
        <div className="roadmap">
            <div className="head-font">Roadmap</div>
            <p className="para">Our Journey through the project</p>
            <div className="data-cover col-md-9 col-12 m-auto">
                {
                    data.map((d, index) => {
                        return (

                            <div className={`row w-100 map roadmap_item${index} ${index == activeRoadmap ? "active": ""}`}>
                                <div className="head-font col-md-3 col-4 date">{d.date}</div>
                                <div className="col-md-8 col-7">
                                    <div className="d-flex align-items-center  ">
                                        {/* <img src="./img/circle.png"></img> */}
                                        <div className="circle"></div>
                                        <div className="head-font title">{d.title}</div>
                                    </div>
                                    {/* <div >
                                        {d.text}            </div> */}
                                        <div className="d-flex mt-1">
                                            <div className={` line ${index + 1 == data.length ? "remoe" : ""}`}></div>
                                            <div className="text">{d.text}</div>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}   