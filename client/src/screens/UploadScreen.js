import {Link} from "react-router-dom";
import logo4 from "../images/element-digital.jpg";
import Header from "../components/Header";

function UploadScreen() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-5">Upload Your Photos</h1>
            <img src={logo4} className="bg-cover w-full h-full" alt="logo"/>

            <div className="flex justify-center bg-blue-400 rounded-full w-64 p-2 my-9 text-white">
                <Link to="/about">Upload</Link>
            </div>
            <div className="flex justify-center p-2 mb-14 text-white">
                <Link to="/dashboard">Explore</Link>
            </div>

        </div>

    )
}

export default UploadScreen;