import React, { useLayoutEffect, useState } from "react"

export default function Faqs() {
    const data = [
        {
            date: "Jan 2022",
            title: "Project Art Development",
            text: "The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date: "Jan 2022",
            title: "Project Art Development",
            text: "The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date: "Jan 2022",
            title: "Project Art Development",
            text: "The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date: "Jan 2022",
            title: "Project Art Development",
            text: "The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date: "Jan 2022",
            title: "Project Art Development",
            text: "The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date: "Jan 2022",
            title: "Project Art Development",
            text: "The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        }
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

                            <div className={`row map roadmap_item${index} ${index == activeRoadmap ? "active": ""}`}>
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