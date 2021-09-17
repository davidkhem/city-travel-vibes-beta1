import {Link} from "react-router-dom";
import logo8 from "../../../images/chinatown.jpg";
import Header from "../../Header";
import Footer from "../../Footer";

function Chinatown() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-5">Chinatown</h1>
            <img src={logo8} className="bg-cover w-full h-full" alt="logo"/>

            <div className="bg-gray-600 text-white p-10 ">
                <p>Downtown Boston's Chinatown is the cultural heart of the Chinese community and a lively late-night hub. Asian eateries range from dumpling houses and dim sum palaces to seafood spots and upscale lounges. Bakeries, food markets and gift shops dot the area. At the entrance to the neighborhood, contemporary Chinatown Park features a river-inspired fountain, plants native to Asia and a square that draws chess players.</p>
            </div>

            <div className="flex justify-center p-2 mb-14 text-white">
                <Link to="/dashboard">Explore</Link>
            </div>

            <div className="text-red-600 p-2">
                <p>Map</p>
            </div>

            <Footer/>
        </div>

    )
}

export default Chinatown;