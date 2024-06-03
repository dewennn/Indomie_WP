import { useState } from "react";

export default function Page(props){

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

    return(
        <div style={{fontFamily: "Helvetica, Arial", height: "100vh", overflowY: "scroll"}} onScroll={handleScroll}>
            <div className="min-h-[44px] bg-white"></div>
            <div className="flex justify-between p-[50px]">
                <h1 className="text-[400%] font-[600]">{props.product_name}</h1>
                <div className="flex flex-col justify-center">
                    <h3 className="text-[150%] font-[600]">{slogan1}</h3>
                    <h3 className="text-[150%] font-[600]">{slogan2}</h3>
                </div>
            </div>

            <div className="flex justify-center bg-white p-[10px]" style={{height: getItemSize()}}>
                <div className="flex justify-center bg-black px-[200px] py-[50px] rounded-[50px]">
                    <img style={{height: '100%'}} src={props.img} alt="" />
                </div>
            </div>

            <div className="flex justify-between p-[50px]">
                <h1 className="text-[300%] font-[600]">Get to know {props.product_name}.</h1>
            </div>
        </div>
    )
}
