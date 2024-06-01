export default function Product(props){
    const theme = props.theme === 0 ? "bg-gray-200 text-black" : "bg-black text-white"
    const style = "flex flex-col items-center justify-center p-10 mb-[10px]"

    const for_bg_img = {
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "80%",
        backgroundPosition: "50% -15%"
    }
    
    return(
        <>  
            <div className={theme + " " + style} style={props.bg === 1 ? for_bg_img:{}}>
                <h1 className="my-[0px] text-[300%] font-[600]">{props.name}</h1>
                <h2 className="my-[5px] text-[150%]">{props.msg}</h2>
                <div className="my-[10px]">
                    <button className="border border-red-500 bg-red-500 text-white my-2 mx-1 px-4 py-2 rounded-lg">
                        Learn More</button>

                    <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white my-2 mx-1 px-4 py-2 rounded-lg">
                        Buy</button>
                </div>
                <img className={`my-[10px] max-h-[300px]`} style={{opacity: props.bg === 0 ? 100 : 0}} src={props.img} alt="" />
            </div>
        </>
    )
}