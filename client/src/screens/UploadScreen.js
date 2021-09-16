import {Link} from "react-router-dom";
import logo4 from "../images/element-digital.jpg";
import Header from "../components/Header";

function UploadScreen() {
    return (

        <div className="flex flex-col items-center bg-black">

            <Header/>

            <h1 className="text-white pb-3">Upload Your Photos</h1>

            <div className="grid grid-cols-1 mt-5 mx-7">
                <div className='flex items-center justify-center w-full'>
                    <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                        <div className='flex flex-col items-center justify-center pt-7'>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Add Image</p>
                        </div>
                        <input type='file' className="hidden"/>
                    </label>
                </div>
            </div>

            <div className="flex items-center justify-center gap-8 pt-5 pb-6">
                <button
                    className='w-auto bg-gray-400 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel
                </button>
                <button
                    className='w-auto bg-blue-400 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Upload
                </button>
            </div>

            <img src={logo4} className="bg-cover w-full h-96" alt="logo4"/>


            <div className="flex justify-center p-2 my-6 text-white">
                <Link to="/dashboard">Explore</Link>
            </div>


        </div>

    )
}

export default UploadScreen;