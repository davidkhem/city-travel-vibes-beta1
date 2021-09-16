import {useRef} from "react";
// import {Link} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function DashboardScreen() {
    const input = useRef();

    const handleInput = (event) => {
        event.preventDefault();

        console.log(`
        ${input.current.value}
        `)
    };

    return (
        <>
            <div className="flex flex-col items-center bg-black">
                <Header/>

                <div className="flex justify-center">
                    <form className="flex flex-col items-center py-3" onSubmit={handleInput}>
                        <input className="w-64 border-0 m-5 p-2" name="input" ref={input} type="text" placeholder="location" />
                        <button className="flex justify-center bg-blue-400 rounded-full w-64 p-2 my-5 text-white" name="button" type="submit">Enter</button>
                    </form>
                </div>

                <div className="flex flex-col w-full p-2 my-8 text-white">
                    <h1 className="pb-5">Results:</h1>
                        <div className="w-full h-96 bg-gray-600 p-4">
                            {/*<Result/>*/}
                        </div>
                </div>

                <Footer/>
            </div>

        </>
    )
}

export default DashboardScreen;