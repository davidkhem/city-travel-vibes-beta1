import {Link} from "react-router-dom";
import logo7 from "../../../images/north-end.jpg";
import Header from "../../Header";
import Footer from "../../Footer";

function NorthEnd() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-5">North End</h1>
            <img src={logo7} className="bg-cover w-full h-full" alt="logo"/>

            <div className="bg-gray-600 text-white p-10 ">
                <p>The North End, Boston’s Little Italy, is a maze of narrow streets with some of the city’s oldest buildings. On the self-guided Freedom Trail, tourists pass historic sites like the 1680 Paul Revere House and the Old North Church, which played a key role at the beginning of the Revolutionary War. Italian restaurants, coffeehouses, pastry shops and old-school delis pack the area, especially on lively Hanover Street.</p>
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

export default NorthEnd;