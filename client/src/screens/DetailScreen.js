import {Link} from "react-router-dom";
//import images from "../images/bhupendra-singh.jpg";
import Header from "../components/Header";

function DetailScreen() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>
            <h1 className="text-white pb-5">Detail</h1>

            <div className=" bg-white rounded flex items-center w-64 p-3 shadow-sm border border-gray-200">
                <input type="search" name="" id="" placeholder="search images" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                    <div>
                        <select className="text-sm outline-none focus:outline-none bg-transparent">
                            <option value="all" selected>All</option>
                            <option value="building">Photo</option>
                            <option value="statue">Illustration</option>
                            <option value="nature">Vector</option>
                        </select>
                    </div>
            </div>

            <div className="flex justify-center p-2 my-6 text-white">
                <Link to="/dashboard">Explore</Link>
            </div>

        </div>

    )
}

export default DetailScreen;