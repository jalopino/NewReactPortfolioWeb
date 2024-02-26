import React from "react"

const Footer = () => {
    return(
        <div className="bg-[#F7F7F7] sticky bottom-0 z-[10]">
            <div className="flex flex-row w-[90%] mx-auto justify-center items-center gap-[2rem] py-[1rem]">
                <div>
                    <a href="https://www.instagram.com/paolo_saturnino/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-2xl hover:scale-110 text-[#606470] hover:text-black"></i></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/paolo-juan-saturnino-9abbbb226" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-2xl hover:scale-110 text-[#606470] hover:text-black"></i></a>
                </div>
                <div>
                    <a href="https://www.facebook.com/paolojuan.saturnino/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook text-2xl hover:scale-110 text-[#606470] hover:text-black"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer