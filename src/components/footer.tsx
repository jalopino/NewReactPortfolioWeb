import React from "react"

const Footer = () => {
    return(
        <div className="bg-[#F7F7F7] sticky bottom-0 z-[10]">
            <div className="flex flex-row w-[90%] mx-auto justify-center items-center gap-[2rem] py-[1rem]">
                <div>
                    <button><i className="fa-brands fa-instagram text-2xl hover:scale-110 text-[#606470] hover:text-black"></i></button>
                </div>
                <div>
                    <button><i className="fa-brands fa-linkedin text-2xl hover:scale-110 text-[#606470] hover:text-black"></i></button>
                </div>
                <div>
                    <button><i className="fa-brands fa-facebook text-2xl hover:scale-110 text-[#606470] hover:text-black"></i></button>
                </div>

            </div>
        </div>
    )
}

export default Footer