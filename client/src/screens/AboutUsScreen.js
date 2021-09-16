import {Link} from "react-router-dom";
import logo2 from "../images/ketut-subiyanto.jpg";
import Header from "../components/Header";

function AboutUsScreen() {
    return (
        <>
            <div className="flex flex-col items-center bg-black">
                <Header/>

                <img src={logo2 } className="bg-cover w-full h-96" alt="logo"/>
                <h1 className="text-3xl text-white">About Us</h1>
                    <div className="bg-black text-white p-3">
                        <p>We are City Travel Vibes.</p>
                        <p>We want users to experience the places they visit through photography. The app provides them the best locations to shoot and pose within walking distance.</p>
                    </div>

                    <div className="flex justify-center bg-blue-400 text-white rounded-full w-64 p-2 mt-10 mb-28">
                        <Link to="/login">Log In</Link>
                    </div>

            </div>
        </>
    )
}

export default AboutUsScreen;