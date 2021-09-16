import { useRef } from "react";
import Header from "../components/Header";

function LoginScreen() {
    const email = useRef();
    const password = useRef();

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(`
        ${email.current.value}
        ${password.current.value}
        `)
    };

    return (
        <div className="bg-black w-full h-screen">
            <Header/>
            <div className="flex flex-col items-center">
                <h1 className="text-white" >Log In</h1>
            </div>
            <div className="flex justify-center">
                <form className="flex flex-col items-center py-3" onSubmit={handleLogin}>
                    <input className="w-64 border-0 m-5 p-2" name="email" ref={email} type="email" placeholder="email" />
                    <input className="w-64 border-0 m-5 p-2" name="password" ref={password} type="password" placeholder="password" />
                    <button className="flex justify-center bg-blue-400 rounded-full w-64 p-2 my-5 text-white" name="button" type="submit">Enter</button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;