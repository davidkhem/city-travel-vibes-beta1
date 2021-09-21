import {Link} from "react-router-dom";
import logo10 from "../../../images/boston-common.jpeg";
import Header from "../../Header";
import Footer from "../../Footer";

function BostonCommon() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-5">BostonCommon</h1>
            <img src={logo10} className="bg-cover w-full h-full" alt="logo"/>

            <div className="bg-gray-600 text-white p-10 ">
                <p>Boston Common is a central public park in downtown Boston, Massachusetts. It is sometimes erroneously referred to as the Boston Commons. Dating from 1634, it is the oldest city park in the United States.</p>
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

export default BostonCommon;