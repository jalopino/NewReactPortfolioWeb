import React, { useEffect } from "react"
import { useState } from "react"
import "../styles/nav.css"

const Logo = '<Paolo/>'
const Nav = () => {
    const [openBar, setOpenBar] = useState(false)
    const startUp = 'invisible'
    const [count, setCount] = useState(0)
    useEffect(() => {

    })
    return(
        <div className="bg-[#F7F7F7] shadow-xl relative sticky top-0 z-20">
            <div className="py-[1rem] flex flex-row w-[100%] justify-center items-center gap-[50%]">
                <div>
                    <button className="font-[gabarito] font-black text-[#606470] text-lg transition-all hover:scale-110 hover:text-black">{Logo}</button> 
                </div>
                <div>
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
            <fieldset disabled={openBar ? false : true} className={count < 1 ? startUp : ''}>
                <div className={openBar ? 
                "mobilenav px-[2rem] py-[0.5rem] gap-[0.5rem] flex flex-col absolute right-7 bg-[#F7F7F7] text-start border-solid border-1 border-[#F7F7F7] shadow-2xl rounded-lg mt-[1rem]" : 
                "mobilenavclose px-[2rem] py-[0.5rem] gap-[0.5rem] flex flex-col absolute right-7 bg-[#F7F7F7] text-start border-solid border-1 border-[#F7F7F7] shadow-2xl rounded-lg mt-[1rem]"}>
                    <div className="transition-all hover:scale-125">
                        <button className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-person px-[0.5rem]"></i> about</button>
                    </div>
                    <div className="transition-all hover:scale-125">
                        <button className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-check px-[0.5rem]"></i>portfolio</button>
                    </div>
                    <div className="transition-all hover:scale-125">
                        <button className="font-[Thasadith] text-[#606470] font-semibold hover:text-black"><i className="fa fa-phone px-[0.5rem]"></i>contact</button>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default Nav