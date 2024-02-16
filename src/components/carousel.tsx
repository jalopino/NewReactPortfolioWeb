import React from "react";
import { useState } from "react";
import '../styles/carousel.css'
import Loading from '../assets/loading.svg'
interface Curbside {
    photo: string[];
}

const Carousel = ({photo}: Curbside)=> {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [previousPage, setPreviousPage] = useState(page)
    return(
        <div className="relative">
            <button className={page === 0 ? "hidden" : ""} onClick={()=>{ 
            page > 0 ? setPage(page - 1) : setPage(photo.length - 1);
            setPreviousPage(page);
            setLoading(true);
            }
        }><i className="
            absolute text-white text-2xl transition top-[7rem] left-[1rem]
            fa fa-arrow-circle-left hover:scale-110 hover:text-black z-2"></i></button>
            <button className={page === (photo.length - 1) ? "hidden" : ""} onClick={()=>{ 
            page < (photo.length - 1) ? setPage(page + 1) : setPage(0);
            setPreviousPage(page);
            setLoading(true);
            }
        } ><i className="absolute text-white text-2xl transition top-[7rem] right-[1rem]
            fa fa-arrow-circle-right hover:scale-110 hover:text-black z-2"></i></button>
            <div className="flex flex-row mx-auto w-[80%] justify-center items-center gap-[3rem] overflow-hidden">
                <div className={"clip border-2 w-[25rem] h-[12rem] border-white rounded-2xl bg-white"}>
                    <div className={loading ? "" : "hidden"}>
                        <div className="w-[3rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img src={Loading} className="animate-spin" alt=""/>
                        </div>  
                    </div>
                    <div className={loading ? "hidden" : ""}>
                        <img onLoad={()=> setLoading(false)} src={photo[page]} alt="" className={page > previousPage ? "carousel-anim w-[25rem] h-[12rem] object-cover z-0" : "carousel-reverse w-[25rem] h-[12rem] object-cover z-0"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel