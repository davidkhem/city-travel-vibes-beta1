import MenuBar from "./sections/MenuBar";

const Footer = () => {

    return (
        <div className="flex justify-center w-full bg-black">
            <div className="flex inline w-full p-3">
                <MenuBar />
            </div>
        </div>
    );
}

export default Footer;