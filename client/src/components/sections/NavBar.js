import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={"flex text-4xl text-white"}>
            <Link to="/">City Travel Vibes</Link>
        </div>
    );
};

export default NavBar;