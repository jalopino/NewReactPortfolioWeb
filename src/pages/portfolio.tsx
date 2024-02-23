import React from "react";
import Carousel from "../components/carousel";
import Curb1 from "../assets/curbside/1.png"
import Curb2 from "../assets/curbside/2.png"
import Curb3 from "../assets/curbside/3.png"
import Curb4 from "../assets/curbside/4.png"
import Curb5 from "../assets/curbside/5.png"
import Curb6 from "../assets/curbside/6.png"
import Pointer from "../assets/pointer.png"
import "../styles/carousel.css"

const Portfolio = ()=> {
    const curbside = {
        photo: [Curb1, Curb2, Curb3, Curb4, Curb5, Curb6]
    }
    return(
        <div>
            {/*Mobile View*/}
            <div className="md:hidden">
                <section className="py-[3rem] rounded-t-3xl bg-gradient-to-t from-[#323643] to-[#93DEFF] mb-[-0.1rem]">
                    <div className="flex justify-center items-center pb-[3rem]">
                        <div className="font-[gabarito] font-black text-4xl text-[#F7F7F7]">
                            Portfolio
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button>
                            <div className="transition font-[Thasadith] font-normal text-4xl text-[#F7F7F7] relative hover:scale-110">
                                Curbside Coffee
                                <div className="pointer absolute rotate-[-30deg] top-[1.5rem] right-[-1rem] left-[14rem] z-10">
                                    <img src={Pointer} alt="" />
                                </div>
                            </div>
                        </button>
                    </div>
                    <Carousel {...curbside}/>
                    <div className="flex justify-center items-center my-[1rem] w-[70%] mx-auto">
                        <div className="font-[Thasadith] font-normal text-2xl text-[#F7F7F7] text-center">
                            A project that started on December of 2023 for a local coffee shop in Bacolod City.
                        </div>
                    </div>
                </section>
            </div>
            {/*Mobile View*/}
            {/*Desktop View*/}
            
            {/*Desktop View*/}
        </div>
    )
}

export default Portfolio