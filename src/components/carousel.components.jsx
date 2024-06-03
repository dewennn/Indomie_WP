import { useEffect, useState } from "react";

export default function Carousel(props){

    const [dur, setDur] = useState(200)
    const [slides, setSlides] = useState(props.slides)
    const [currIdx, setCurrIdx] = useState(1)

    const previousSlide = (idx) => {
        if (idx !== currIdx - 1) return

        if(currIdx === 1){
            const updatedSlides = [...slides]

            // No animation time; Add copy of last slide on the front of the carousel; Shift i to the right
            setDur(0)
            updatedSlides.unshift(updatedSlides[updatedSlides.length - 1])
            setSlides(updatedSlides)
            setCurrIdx((i) => i + 1)

            // Set timeout 20ms after this script is loaded; Shift i to the left'
            setTimeout(() => {
                setDur(200)
                setCurrIdx((i) => i - 1)
            }, 20)

            // Set timeout 50ms after this script is loaded; Pop the last slide
            setTimeout(() => {
                setDur(0)
                updatedSlides.pop()
                setSlides(updatedSlides)
            }, 50)
        }
        else{
            setDur(200)
            setCurrIdx((i) => i - 1)
        }
    }
    
    const nextSlide = (idx) => {
        if (idx !== currIdx + 1) return

        if (currIdx === slides.length - 2){
            const updatedSlides = [...slides]
            updatedSlides.push(updatedSlides[0])
            setSlides(updatedSlides)

            setTimeout(() => {
                setDur(200)
                setCurrIdx((i) => i + 1)
            },20)

            setTimeout(() => {
                setDur(0)
                updatedSlides.shift()
                setSlides(updatedSlides)
                setCurrIdx((i) => i - 1)
            }, 50)
        }
        else{
            setDur(200)
            setCurrIdx((i) => i + 1)
        }
    }

    return(
        <div className="w-[60%]">
            <div
                className={`flex transition ease-out duration-[${dur}ms]`}
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