import NavBar from "./sections/NavBar";

const Header = () => {

    return (
        <div className="flex justify-center w-full bg-black">
            <div className="flex inline justify-around w-full p-4">
                <NavBar />
            </div>
        </div>
    );
}

export default Header;