import NavBar from "./components/nav_bar.components";
import Carousel from "./components/carousel.components";
import Product from "./components/product.components";
import Event from "./components/event.components";

const productList = [
    {name: "Indomie", msg: "Simply iconic.", img: "/indomie-goreng.png", bg: 0, theme: 1},

    {name: "Choc Rocks x Indomie", msg: "Incredibly innovative. Unbelievably creamy", img: "/ice-cream-indomie.png", bg: 1, theme: 1},

    {name: "Pop Mie", msg: "Small package. Large load.", img: "/pop-mie.png", bg: 0, theme: 0}
]

const eventList = [
    "/indomie-charity.jpeg",
    "/indomie-pubg.jpg",
    "/indomie-event.jpg"
]

function HomePage() {
  return (
    <>
        <div style={{fontFamily: "Helvetica, Arial"}}>
            <div className="min-h-[44px] bg-gray-700"></div>

            {productList.map((product) => {return <Product
                name={product["name"]}
                msg={product["msg"]}
                img={product["img"]}
                bg={product["bg"]}
                theme={product["theme"]}
            />})}

            <div className="grid grid-cols-2 gap-[10px] m-[10px] h-[500px]">
                <Event title="Indomie Worldwide eating contest" detail="Join us in GBK 10-15 October" up={1} img="/eating-contest.png" theme={0}/>

                <Event title="Anak Kos" detail="Indomie everyday. Save your wallet." up={0} img={"/anak-kos.png"} theme={0}/>
            </div>


            <div className="w-[100%] my-[5pzpx] overflow-hidden flex justify-center">
                <Carousel slides={eventList}/>
            </div>

            
        </div>
    </>
  );
}

export default HomePage;
