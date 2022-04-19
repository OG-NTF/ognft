import React from "react"

export default function Faqs (){
    const data =[
        {
            date:"Jan 2022",
            title:"Project Art Development",
            text:"The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date:"Jan 2022",
            title:"Project Art Development",
            text:"The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date:"Jan 2022",
            title:"Project Art Development",
            text:"The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date:"Jan 2022",
            title:"Project Art Development",
            text:"The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date:"Jan 2022",
            title:"Project Art Development",
            text:"The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        },
        {
            date:"Jan 2022",
            title:"Project Art Development",
            text:"The use of the word OG has transcended across continents, races, and societies, with each sphere attributing to different definitions and narratives as to what the “OG” phenomenon connotes most of which revolves around being Accomplished, Experienced, Kingly or Queenly, Bosslike, Tough, disciplined, Ruthless, and More."
        }
    ]
return(
    <div className="roadmap">
        <div className="head-font">Roadmap</div>
            <p className="para">Our Journey through the project</p>
              <div className="data-cover col-md-9 col-12 m-auto">
            {
                data.map((d , index)=>{
                    return(
                      
<div className="row map ope">
<div className="head-font col-md-3 col-4 date">{d.date}</div>
            <div className="col-md-8 col-7">
            <div className="d-flex align-items-center  ">
                {/* <img src="./img/circle.png"></img> */}
                <div className="circle"></div>
                <div className="head-font title">{d.title}</div>
            </div>
            <div className={`mb-3 mb-md-0 text ${index + 1 == data.length ? "remoe" :""}`}>
{d.text}            </div>
            </div>
                        </div>    
                    )
                })
            }
    </div>
    </div>
)
}