import React, { useEffect } from "react"
import { useState, useRef } from "react"
import "../styles/nav.css"

const Logo = '<Paolo/>'

const Nav = ({fn}: any) => {
    const [openBar, setOpenBar] = useState(false)
    const startUp = 'invisible'
    const [count, setCount] = useState(0)
    const navBox = useRef<HTMLDivElement>(null)
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      });
    const handleOutsideClick = (e: any) => {
        if (navBox.current && !navBox.current.contains(e.target)) {
            setOpenBar(false)
        }
      };
    return(
        <div ref={navBox} className="bg-[#F7F7F7] shadow-xl relative sticky top-0 z-20">
            <div className="py-[1rem] flex flex-row w-[100%] justify-center items-center gap-[50%]">
                <div>
                    <button className="font-[gabarito] font-black text-[#606470] text-lg transition-all hover:scale-110 hover:text-black">{Logo}</button> 
                </div>
            {/*Desktop View*/}
                <div className="flex flex-row justify-center items-center gap-[3rem] xs:hidden md:flex">
                    <div className="transition-all hover:scale-110">
                        <button onClick={()=> fn('about')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black">About</button>
                    </div>
                    <div className="transition-all hover:scale-110">
                        <button onClick={()=> fn('portfolio')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black">Portfolio</button>
                    </div>
                    <div className="transition-all hover:scale-110">
                        <button onClick={()=> fn('contact')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black">Contact</button>
                    </div>
                </div>
            {/*Desktop View*/}
            {/*Mobile View*/}
                <div className="md:hidden">
                    <button onClick={()=>{
                        if(openBar) {
                            setOpenBar(false)
                        } else {
                            setOpenBar(true)
                            setCount(count < 1 ? count + 1 : count + 0)
                        }
                    }
                }
                        className="transition-all hover:scale-125 text-[#606470] hover:text-black"><i className="fa fa-bars"></i></button> 
                </div>
            </div>
            <div className="md:hidden">
                <fieldset disabled={openBar ? false : true} className={count < 1 ? startUp : ''}>
                    <div className={openBar ? 
                    "mobilenav px-[2rem] py-[0.5rem] gap-[0.5rem] flex flex-col absolute right-7 bg-[#F7F7F7] text-start border-solid border-1 border-[#F7F7F7] shadow-2xl rounded-lg mt-[1rem]" : 
                    "mobilenavclose px-[2rem] py-[0.5rem] gap-[0.5rem] flex flex-col absolute right-7 bg-[#F7F7F7] text-start border-solid border-1 border-[#F7F7F7] shadow-2xl rounded-lg mt-[1rem]"}>
                        <div className="transition-all hover:scale-125">
                            <button onClick={()=> fn('about')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-person px-[0.5rem]"></i> about</button>
                        </div>
                        <div className="transition-all hover:scale-125">
                            <button onClick={()=> fn('portfolio')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-check px-[0.5rem]"></i>portfolio</button>
                        </div>
                        <div className="transition-all hover:scale-125">
                            <button onClick={()=> fn('contact')} className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-phone px-[0.5rem]"></i>contact</button>
                        </div>
                    </div>
                </fieldset>
            </div>
            {/*Mobile View*/}
        </div>
    )
}

export default Nav