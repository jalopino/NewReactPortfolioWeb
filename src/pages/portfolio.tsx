import React from "react";
import Carousel from "../components/carousel";
import Curb1 from "../assets/curbside/1.png"
import Curb2 from "../assets/curbside/2.png"
import Curb3 from "../assets/curbside/3.png"
import Curb4 from "../assets/curbside/4.png"
import Curb5 from "../assets/curbside/5.png"
import Curb6 from "../assets/curbside/6.png"

const Portfolio = ()=> {
    const curbside = {
        photo: [Curb1, Curb2, Curb3, Curb4, Curb5, Curb6]
    }
    return(
        <div className="py-[3rem] border rounded-t-3xl bg-gradient-to-t from-[#323643] to-[#93DEFF]">
            <div className="flex justify-center items-center pb-[3rem]">
                <div className="font-[gabarito] font-black text-4xl text-[#F7F7F7]">
                    MY PORTFOLIO
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="font-[Thasadith] font-normal text-4xl text-[#F7F7F7]">
                    Curbside Coffee
                </div>
            </div>
            <Carousel {...curbside}/>
        </div>
    )
}

export default Portfolio 