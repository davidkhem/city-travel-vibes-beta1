import {Link} from "react-router-dom";
import logo from "../../../images/fenway-park.jpg";
import Header from "../../Header";
import Footer from "../../Footer";

function FenwayPark() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-5">Fenway Park</h1>
            <img src={logo} className="bg-cover w-full h-full" alt="logo"/>

            <div className="bg-gray-600 text-white p-10 ">
                <p>Fenway Park is a baseball park located in Boston, Massachusetts, near Kenmore Square. Since 1912, it has been the home for the Boston Red Sox, the city's American League baseball team, and since 1953, its only Major League Baseball franchise.</p>
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

export default FenwayPark;