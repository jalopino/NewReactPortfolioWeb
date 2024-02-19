import React from "react";
import Message from "../components/message";


const Contact = ()=> {
    return(
        <section className="bg-[#323643] overflow-hidden">
            <div className="flex flex-col w-[80%] mx-auto items-start py-[.5rem] relative">
                <div className="font-[gabarito] text-white text-4xl font-bold ">
                    Get in touch
                </div>
                <Message/>
                <div className="font-[thasadith] text-white text-4xl font-bold">
                    Socials
                </div>
                <div className="font-[thasadith] text-white text-2xl pt-[1rem] pb-[0.2rem]">
                    LinkedIn: <span>Paolo Juan Saturnino</span>
                </div>
                <div className="font-[thasadith] text-white text-2xl pb-[0.2rem]">
                    Instagram: <span>paolo_saturnino</span>
                </div>
                <div className="font-[thasadith] text-white text-2xl ">
                    Facebook: <span>paolojuan.saturnino</span>
                </div>
            </div>
        </section>
    )
}

export default Contact