export default function NavBar(props){

    const logo = props.logo
    const navs = props.navs

    return(
        <div>
            <div class="bg-black/80 p-1.5 flex justify-center items-center fixed top-0 w-full z-[1000]">
                <img className="mx-[30px] w-12" src={logo} alt="" />
                {navs.map((nav) => {
                    const temp = "mx-[30px] text-[14px] text-white hover:cursor-pointer"

                    if(Array.isArray(nav)){
                        return <a href={nav[1]}><p className={temp}>{nav[0]}</p></a>
                    }
                    else return <p className={temp}>{nav}</p>
                })}
            </div>
        </div>
    )
}