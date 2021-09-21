import {Link} from "react-router-dom";
import logo9 from "../../../images/quincy-market.jpg";
import Header from "../../Header";
import Footer from "../../Footer";

function QuincyMarket() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-5">Quincy Market</h1>
            <img src={logo9} className="bg-cover w-full h-full" alt="logo"/>

            <div className="bg-gray-600 text-white p-10 ">
                <p>Quincy Market is a historic market complex near Faneuil Hall in downtown Boston, Massachusetts. It was constructed in 1824–26 and named in honor of Mayor Josiah Quincy, who organized its construction without any tax or debt.</p>
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

export default QuincyMarket;