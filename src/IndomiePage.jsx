import { useState } from "react";
import MiniCarousel from "./components/mini_carousel.components";

export default function IndomiePage(){

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (event) => {
        const scrollTop = event.target.scrollTop;
        setScrollPosition(scrollTop);
    };

    const getItemSize = () => {
        const baseSize = 1000;
        const shrinkFactor = 1;

        const adjustedSize = baseSize - scrollPosition * shrinkFactor;
        
        return Math.max(adjustedSize, 650);
    };

    const img_list = [
        '/indomie1.jpg',
        '/indomie2.jpg',
        '/indomie3.jpg',
        '/indomie4.jpg'
    ]

    return(
        <div style={{fontFamily: "Helvetica, Arial", height: "100vh", overflowY: "scroll"}} onScroll={handleScroll}>
            <div className="min-h-[44px] bg-white"></div>
            <div className="flex justify-between p-[50px]">
                <h1 className="text-[400%] font-[600]">Indomie</h1>
                <div className="flex flex-col justify-center">
                    <h3 className="text-[150%] font-[600]">Taste from Sabang to Merauke</h3>
                    <h3 className="text-[150%] font-[600]">in one package.</h3>
                </div>
            </div>

            <div className="flex justify-center bg-white p-[10px]" style={{height: getItemSize()}}>
                <div className="flex justify-center bg-black px-[200px] py-[50px] rounded-[50px]">
                    <img style={{height: '100%'}} src="/indomie-goreng.png" alt="" />
                </div>
            </div>

            <div className="flex justify-between p-[50px]">
                <h1 className="text-[300%] font-[600]">Get to know Indomie.</h1>
            </div>

            <MiniCarousel slides={img_list}/>
        </div>


    )
}
