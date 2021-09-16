import {Link} from "react-router-dom";
import logo from "../images/bhupendra-singh.jpg";
import Header from "../components/Header";

function WelcomeScreen() {
    return (
        <>
            <div className="flex flex-col items-center bg-black">
                <Header/>
                <h1 className="text-white pb-5">Best Location Spots for Photos</h1>
                <img src={logo} className="bg-cover w-full h-full" alt="logo"/>
                <div className="flex justify-center bg-blue-400 rounded-full w-64 p-2 my-9 text-white">
                    <Link to="/about">About Us</Link>
                </div>
                <div className="flex justify-center p-2 mb-14 text-white">
                    <Link to="/dashboard">Explore</Link>
                </div>

            </div>

        </>
    )
}

export default WelcomeScreen;