export default function Event(props){

    const style = {
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${props.img})`,
        backgroundColor: props.theme ? 'rgba(0,0,0,5%)' : 'rgba(0,0,0,100%)',
        color: props.theme ? 'black' : 'white',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: props.up ? "flex-start" : "flex-end"
    }

    return(
        <div className="p-[40px]"  style={style}>
            <h2 className="text-[200%] font-[600]">{props.title}</h2>
            <h3 className="mb-[5px] text-[100%] font-[200]">{props.detail}</h3>

            <button className="my-[5px] border border-red-500 bg-red-500 text-white my-2 mx-1 px-4 py-2 rounded-lg">Learn more</button>
        </div>
    )
}