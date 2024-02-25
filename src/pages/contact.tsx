import React from "react";
import Message from "../components/message";
import Hero from "../assets/herocontact.png"


const Contact = ({noti, setStat} :any)=> {
    return(
        <div>
            {/*Mobile View*/}
            <div className="md:hidden">
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
            </div>
            {/*Mobile View*/}
            {/*Desktop View*/}
            <div className="xs:hidden md:block"> 
                <section className="bg-[#323643] overflow-hidden py-[2rem] relative">
                    <div className="flex py-[3rem] justify-center font-[gabarito] text-white text-6xl font-bold">
                        Get in touch
                    </div>
                    <div className="flex flex-row w-[100%] justify-center gap-[2rem] ">
                        <div className="z-10">
                            <Message setNoti={noti} setNotiStatus={setStat}/>
                        </div>
                        <div className="flex flex-col w-[30%] items-start py-[.5rem] px-[2rem] relative z-10 my-auto">
                            <div className="font-[gabarito] text-white text-6xl font-bold mt-[2rem]">
                                Socials
                            </div>
                            <div className="font-[thasadith] text-white text-3xl pt-[1rem] pb-[1rem]">
                            <i className="bg-[#93DEFF] rounded-md px-[0.5rem] py-[0.2rem] fa-brands fa-linkedin align-middle mr-[0.5rem]"></i>LinkedIn: <span>Paolo Juan Saturnino</span>
                            </div>
                            <div className="font-[thasadith] text-white text-3xl pb-[1rem]">
                            <i className="bg-[#93DEFF] rounded-md px-[0.5rem] py-[0.2rem] fa-brands fa-instagram align-middle mr-[0.5rem]"></i>Instagram: <span>paolo_saturnino</span>
                            </div>
                            <div className="font-[thasadith] text-white text-3xl mb-[2rem]">
                            <i className="bg-[#93DEFF] rounded-md px-[0.4rem] py-[0.2rem] fa-brands fa-facebook align-middle mr-[0.5rem] "></i>Facebook: <span>paolojuan.saturnino</span>
                            </div>
                        </div>
                    </div>
                    <div className="z-1">
                        <img src={Hero} alt="" className="absolute bottom-0 w-[80rem] scale-x-[-1]"/>
                    </div>
                    </section>
            </div>
            {/*Desktop View */}
        </div>
    )
}

export default Contact