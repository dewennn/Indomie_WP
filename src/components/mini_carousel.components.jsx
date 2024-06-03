import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function MiniCarousel(props){

    const [currIdx, setCurrIdx] = useState(0)

    const prevSlide = () => {
        currIdx - 1 >= 0 ? setCurrIdx((i) => i - 1) : setCurrIdx(0)
    }
    const nextSlide = () => {
        currIdx + 1 <= props.slides.length-1 ? setCurrIdx((i) => i + 1) : setCurrIdx(props.slides.length-1)
    }

    return(
        <div className="w-[100%] overflow-hidden">
            <div
                className="flex transition ease-out duration-[400ms] px-[100px]"
                style={{ transform: `translateX(-${currIdx * 20}%)` }}>

                {props.slides.map((s, idx) => {return <img
                    style={{margin: "0px 10px", borderRadius: "10px", height: "700px", width:"400px", objectFit: "cover"}} key={idx} src={s}/>
                })}
            </div>
            <div className="flex justify-end px-[50px] py-[20px]">
                <button className="text-[40px] mx-[5px]" onClick={prevSlide}><FaArrowCircleLeft/></button>
                <button className="text-[40px] mx-[5px]" onClick={nextSlide}><FaArrowCircleRight/></button>
            </div>
        </div>
    )
}