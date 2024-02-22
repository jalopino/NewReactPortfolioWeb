import React from "react";
import Profile from "../assets/Profile.png"
import Plane from "../assets/plane.png"
import CI from "../assets/codeigniter.svg"
import CSS3 from "../assets/css3.svg"
import HTML from "../assets/html5.svg"
import JS from "../assets/javascript.svg"
import MONGO from "../assets/mongodb.svg"
import MYSQL from "../assets/mysql.svg"
import NODE from "../assets/nodejs.svg"
import PHP from "../assets/php.svg"
import REACT from "../assets/react.svg"
import PH from "../assets/philippines.svg"
import GRAD from "../assets/grad.svg"
import LAPTOP from "../assets/laptop.png"

const Home = () => {
    return(
        <div>
            {/*Mobile View*/}
            <div className="md:hidden">
                <section className="bg-[#323643]">
                    <div className="h-[750px] flex flex-col w-[100%] mx-auto justify-center items-center gap-[3rem] text-center">
                        <div>
                            <div className="font-[gabarito] font-black text-6xl text-[#F7F7F7] relative">Hi! I'm Paolo Saturnino,
                                <button>
                                    <img src={Profile} alt="" 
                                    className="transition absolute top-[-10rem] right-10 h-[10rem] rotate-[21deg] z-0 hover:scale-110"/>
                                </button>
                                <img src={Plane} alt="" className="absolute rotate-90 z-0 top-[18rem] right-[8rem] h-[9rem]"/>
                            </div>
                        </div>
                        <div className="font-[Thasadith] font-black text-4xl text-[#93DEFF] z-10 animate-bounce">a junior web developer.</div>
                    </div>
                </section>
                <section className="bg-gradient-to-b from-[#323643] to-[#93DEFF] rounded-b-3xl mt-[-0.1rem]">
                    <div className="flex flex-col w-[90%] mx-auto justify-center items-center gap-[3rem] text-center py-10">
                        <div className="font-[gabarito] font-black text-4xl text-[#F7F7F7]">
                            What's my tech stack?
                        </div>
                        <div className="bg-[#F7F7F7] p-[1.5rem] border-white border-solid border-1 rounded-2xl shadow-lg">
                            <div className="flex flex-row w-[100%] mx-auto justify-center items-center gap-[3rem] text-center">
                                <img src={REACT} alt="" className="h-[5rem]"/>
                                <img src={NODE} alt="" className="h-[5rem]"/>
                                <img src={MONGO} alt="" className="h-[5rem]"/>
                            </div>
                        </div>
                        <div className="flex flex-row w-[100%] mx-auto justify-center items-center gap-[3rem] text-center font-[Thasadith] font-black text-lg text-[#F7F7F7] z-10">
                            Currently focusing on React, Express/Node JS, and MongoDB
                        </div>
                        <div className="flex flex-row w-[100%] mx-auto justify-center items-center gap-[3rem] text-center font-[gabarito] font-bold text-2xl text-[#F7F7F7] z-10 mt-10">
                            Stacks I used for previous projects:
                        </div>
                        <div className="bg-[#F7F7F7] p-[1.5rem] border-white border-solid border-1 rounded-2xl shadow-lg">
                            <div className="flex flex-row w-[100%] mx-auto justify-center items-center gap-[3rem] text-center">
                                <img src={HTML} alt="" className="h-[5rem]"/>
                                <img src={JS} alt="" className="h-[5rem]"/>
                                <img src={CSS3} alt="" className="h-[5rem]"/>
                            </div>
                            <div className="flex flex-row w-[100%] mx-auto justify-center items-center gap-[3rem] text-center mt-10">
                                <img src={CI} alt="" className="h-[5rem]"/>
                                <img src={PHP} alt="" className="h-[5rem]"/>
                                <img src={MYSQL} alt="" className="h-[5rem]"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="flex flex-col w-[80%] mx-auto justify-center items-center gap-[3rem] text-center py-10">
                        <div className="font-[gabarito] font-black text-4xl text-[#606470]">
                            What's my story?
                        </div>
                        <div className="flex flex-row justify-center items-center text-start">
                            <div className="font-[Thasadith] text-[#606470] font-semibold text-xl">
                                Born and raised in the Philippines, I was always fascinated with computers at a young age.
                            </div>
                            <div>
                                <img src={PH} alt=""/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center text-start gap-[3rem]">
                            <div>
                                <img src={GRAD} alt="" className="rotate-[-15deg]"/>
                            </div>
                            <div className="font-[Thasadith] text-[#606470] font-semibold text-xl">
                                Which ultimately led me to persue a bachelor's degree in Information Technology!
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center text-start gap-[3rem]">
                            <div className="font-[Thasadith] text-[#606470] font-semibold text-xl">
                                I always keep up with new upcoming tech 
                                trends to keep myself updated in best practices.
                            </div>
                            <div>
                                <img src={LAPTOP} alt="" className="w-[60rem]"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/*Mobile View*/}
            {/*Desktop View*/}
            <div>
                <section className="bg-[#323643]">
                    <div className="h-dvh">

                    </div>
                </section>
            </div>
            {/*Desktop View*/}
        </div>

    )
}

export default Home