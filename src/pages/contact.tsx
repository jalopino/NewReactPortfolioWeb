import React from "react";
import Message from "../components/message";


const Contact = ()=> {
    return(
        <section className="bg-[#323643] overflow-hidden">
            <div className="flex flex-col w-[100%] mx-auto items-start py-[.5rem] px-[2rem] relative">
                <div className="font-[gabarito] text-white text-4xl font-bold ">
                    Get in touch
                </div>
                <Message/>
                <div className="font-[thasadith] text-white text-4xl font-bold mt-[2rem]">
                    Socials
                </div>
                <div className="font-[thasadith] text-white text-xl pt-[1rem] pb-[0.2rem]">
                <i className="bg-[#93DEFF] rounded-md px-[0.5rem] py-[0.2rem] fa-brands fa-linkedin align-middle mr-[0.5rem]"></i>LinkedIn: <span>Paolo Juan Saturnino</span>
                </div>
                <div className="font-[thasadith] text-white text-xl pb-[0.2rem]">
                <i className="bg-[#93DEFF] rounded-md px-[0.5rem] py-[0.2rem] fa-brands fa-instagram align-middle mr-[0.5rem]"></i>Instagram: <span>paolo_saturnino</span>
                </div>
                <div className="font-[thasadith] text-white text-xl mb-[2rem]">
                <i className="bg-[#93DEFF] rounded-md px-[0.4rem] py-[0.2rem] fa-brands fa-facebook align-middle mr-[0.5rem] "></i>Facebook: <span>paolojuan.saturnino</span>
                </div>
            </div>
        </section>
    )
}

export default Contact