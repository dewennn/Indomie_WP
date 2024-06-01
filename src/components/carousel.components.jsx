import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Carousel(props){

    const [dur, setDur] = useState(200)
    const [slides, setSlides] = useState(props.slides)
    const [currIdx, setCurrIdx] = useState(1)

    const previousSlide = (idx) => {
        if (idx !== currIdx - 1) return
        const updatedSlides = [...slides]

        if(currIdx === 1){
            setDur(0)
            updatedSlides.unshift(updatedSlides[updatedSlides.length - 1])
            setSlides(updatedSlides)
            setCurrIdx((i) => i + 1)

            setDur(200)
            const temp = currIdx - 1 >= 0 ? 1 : 0
            setTimeout(() => {setCurrIdx((i) => i - temp)}, 20)

            setTimeout(() => {
                setDur(0)
                const updatedSlides = [...slides]
                updatedSlides.unshift(updatedSlides[updatedSlides.length - 1])
                updatedSlides.pop()
                setSlides(updatedSlides)
                setCurrIdx(1)
            }, 200)
        }
        else{
            setDur(200)
            const temp = currIdx - 1 >= 0 ? 1 : 0
            setCurrIdx((i) => i - temp)
        }
    }
    
    const nextSlide = (idx) => {
        if (idx !== currIdx + 1) return
        const updatedSlides = [...slides]

        if (currIdx === slides.length - 2){
            updatedSlides.push(updatedSlides[0])
            setSlides(updatedSlides)
        }

        setDur(200)
        const temp = currIdx + 1 < slides.length ? 1 : 0
        setCurrIdx((i) => i + temp)
        
        if (currIdx === slides.length - 2){
            setTimeout(() => {
                setDur(0)
                updatedSlides.shift()
                setSlides(updatedSlides)
                setCurrIdx(1)
            }, 200)
        }
    }

    return(
        <div className="w-[60%]">
            <div
                className={`flex transition ease-out duration-${dur}`}
                style={{ transform: `translateX(-${currIdx * 100}%)` }}>

                {slides.map((s, idx) => {return <img
                    style={{margin: "0px 5px", borderRadius: "10px"}} key={idx} src={s}
                    onClick={() => { 
                        previousSlide(idx); 
                        nextSlide(idx); 
                    }}/>
                })}
            </div>
        </div>
    )
}