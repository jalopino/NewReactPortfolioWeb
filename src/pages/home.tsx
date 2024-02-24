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
import HERO from "../assets/hero_bg.png"
import "../styles/home.css"
import { animateScroll as scroll } from 'react-scroll';

const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

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
            <div className="xs:hidden md:block">
                <section className="bg-[#323643] overflow-hidden">
                    <div className="h-[60rem] flex flex-row w-[80%] mx-auto justify-center items-center relative pointer-events-none select-none">
                        <div className="absolute w-[40%] bottom-[-1%] left-0 ml-[-13%] blur-[1px]">
                            <img src={HERO} alt="" />
                        </div>
                        <div className="absolute w-[40%] bottom-[-1%] right-0 mr-[-13%] blur-[1px] scale-x-[-1]">
                            <img src={HERO} alt="" />
                        </div>
                        <div className="flex flex-col gap-20">
                            <div className="font-[gabarito] font-black text-6xl text-[#F7F7F7] text-center overflow-hidden">
                                Hi! I'm Paolo Saturnino, <br />a junior web <span className="text-[#93DEFF] relative">developer.<div className="text-start text-white line absolute bottom-[-.5rem] right-[-19rem] bg-[#323643] w-[19rem] h-[4.3rem]">|</div></span>
                            </div>
                            <div className="flex bg-[#F7F7F7] w-[100%] p-[1.5rem] border-white border-solid border-1 rounded-2xl shadow-lg overflow-hidden">
                                <div className="flex flex-row w-[100%] mx-auto justify-center items-center md:gap-[2rem] gap-[3rem] text-center">
                                    <img src={REACT} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                    <img src={NODE} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                    <img src={MONGO} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
    
                                    <img src={CI} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                    <img src={PHP} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                    <img src={MYSQL} alt="" className="md:h-[2rem] lg:h-[5rem]"/>

                                    <img src={HTML} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                    <img src={JS} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                    <img src={CSS3} alt="" className="md:h-[2rem] lg:h-[5rem]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button onClick={()=>scrollToBottom()}className="animate-bounce absolute flex flex-col gap-[1rem] justify-center items-center font-[thasadith] text-lg">
                            <div className="text-white">Go Down</div>
                            <i className="transition fa fa-arrow-down text-[3rem] text-white bg-[#93DEFF] rounded-full px-[1.5rem] py-[1rem]"></i>
                            </button>
                    </div>
                </section>
                <section className="bg-gradient-to-b from-[#323643] to-[#606470] overflow-hidden">
                    <div className="flex flex-col w-[80%] gap-[5rem] mx-auto justify-center items-center relative pointer-events-none select-none pt-[20rem] pb-[4rem]">
                        <div className="flex flex-row gap-10 w-[100%] justify-center items-center">
                            <div className="w-[70%]">
                                <div className="font-[gabarito] font-black text-6xl text-[#F7F7F7] text-center mb-10">
                                    Tech Stack
                                </div>
                                <div className="flex flex-row gap-6 justify-center items-center gap-[4rem]">
                                <div className="w-[100%] flex justify-center items-center">
                                    <div className="font-[thasadith] font-bold text-4xl text-[#F7F7F7] text-justify">
                                            I specialize in <span className="text-[#93DEFF] font-[gabarito]">React, Express/Node JS, and MongoDB.</span> Leveraging extensive experience in web development with a strong foundation in <span className="text-[#93DEFF] font-[gabarito]">HTML, JavaScript, CSS, PHP, MySQL, Python, and frameworks such as CodeIgniter and Flask.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[3rem] bg-[#606470] to-[#93DEFF] rounded-2xl w-[70%] mx-auto p-[3rem] shadow-2xl">
                                <div className="font-[gabarito] font-black text-[#F7F7F7] text-6xl text-center">
                                What's my story?
                                </div>
                                <div className="flex flex-row justify-center text-[#F7F7F7] items-center text-start gap-[3rem]">
                                    <div className="font-[Thasadith] font-semibold text-3xl">
                                        Born and raised in the Philippines, I was always fascinated with computers at a young age.
                                    </div>
                                    <div>
                                        <img src={PH} alt="" className="w-[15rem] bg-white rounded-full p-[.5rem]"/>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center items-center text-start gap-[3rem]">
                                    <div>
                                        <img src={GRAD} alt="" className="rotate-[-15deg] w-[15rem] bg-white rounded-full p-[.5rem]"/>
                                    </div>
                                    <div className="font-[Thasadith] font-semibold text-[#F7F7F7] text-3xl">
                                        Which ultimately led me to persue a bachelor's degree in Information Technology!
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center items-center text-start gap-[3rem]">
                                    <div className="font-[Thasadith] font-semibold text-[#F7F7F7] text-3xl">
                                        I always keep up with new upcoming tech 
                                        trends to keep myself updated in best practices.
                                    </div>
                                    <div>
                                        <img src={LAPTOP} alt="" className="w-[15rem] bg-white rounded-full p-[.5rem]"/>
                                    </div>
                                </div>
                            </div>
                        <div className="absolute w-[40%] top-[-1%] left-0 ml-[-13%] blur-[1px] scale-y-[-1]">
                            <img src={HERO} alt="" />
                        </div>
                        <div className="absolute w-[40%] top-[-1%] right-0 mr-[-13%] blur-[1px] scale-x-[-1] scale-y-[-1]">
                            <img src={HERO} alt="" />
                        </div>
                    </div>
                </section>
            </div>
            {/*Desktop View*/}
        </div>

    )
}

export default Home