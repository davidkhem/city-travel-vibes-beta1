import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div className="flex justify-between text-white w-full bg-black">

                <Link to="/upload">Upload</Link>

                <Link to="/favorites">Favorites</Link>

        </div>
    );
};

export default MenuBar;