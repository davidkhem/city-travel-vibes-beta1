import {useRef} from "react";
import {Link} from "react-router-dom";

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
                        <input className="w-64 border-0 m-5 pl-3" name="input" ref={input} type="text" placeholder="location" />
                        <button className="w-64 bg-blue-400" name="button" type="submit">Enter</button>
                    </form>
                </div>

                <div className="flex justify-center p-2 my-9 text-white">
                    <Link to="/">Explore</Link>
                </div>

                <Footer/>
            </div>

        </>
    )
}

export default DashboardScreen;