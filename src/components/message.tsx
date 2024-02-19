import React, { useState } from "react";
import "../styles/contact.css"

const Message = ()=> {
    const [open, setOpen] = useState(false)
    return(
        <div>
            <div className="flex flex-row items-center mx-auto gap-[10rem] py-[2rem]">
                <div className="transition font-[thasadith] text-2xl text-white hover:scale-110">
                    <button onClick={()=> open ? setOpen(false) : setOpen(true)}>Contact me <i className="fa fa-arrow-right align-middle"></i></button>
                </div>
                <div/>
                <div className={open ? "contact absolute right-0 top-[8rem]" : "absolute right-0 top-[8rem] contactclose"}>
                    <div className="shadow-2xl flex flex-row bg-[#93DEFF] rounded-md w-[25rem] mx-auto p-[1rem] gap-[2rem] items-center">
                        <div className="flex flex-col bg-white rounded-lg w-[100%] mx-auto p-[1rem] gap-[1rem] items-center">
                            <div>
                                <input type="text" placeholder="Email" className="border-gray border rounded-md font-bold font-[thasadith] px-[0.6rem]"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Name" className="border-gray border rounded-md font-bold font-[thasadith] px-[0.6rem]"/>
                            </div>
                            <div>
                                <button className="transition font-[gabarito] bg-[#93DEFF] px-[0.5rem] rounded-sm text-white shadow-2xl hover:scale-110">Submit</button>
                            </div>
                        </div>
                        <div className="font-bold font-[thasadith] text-white text-3xl font-normal">
                            We'll get in touch soon!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message