import {Link} from "react-router-dom";
import logo6 from "../../images/fenway-park.jpg";
import logo7 from "../../images/north-end.jpg";
import logo8 from "../../images/chinatown.jpg";
import logo9 from "../../images/quincy-market.jpg";
import logo10 from "../../images/boston-common.jpeg";
export default function LocationList() {

    return (
        <>
            <div className="flex gap-2 p-2">
                <div className='w-20 h-20'>
                    <img src={logo6} alt='pix'/>
                </div>
                <div className="pl-5">
                    <h3 className="font-bold text-red-600">
                        <Link to="/fenway">Fenway Park</Link>
                    </h3>
                    <p>Home for the Boston Red Sox.</p>
                </div>
            </div>

            <div className="flex gap-2 p-2">
                <div className='w-20 h-20'>
                    <img src={logo7} alt='pix'/>
                </div>
                <div className="pl-5">
                    <h3 className="font-bold text-red-600">
                        <Link to="/northend">North End</Link>
                    </h3>
                    <p>Boston's Little Italy. Great food.</p>
                </div>
            </div>

            <div className="flex gap-2 p-2">
                <div className='w-20 h-20'>
                    <img src={logo8} alt='pix'/>
                </div>
                <div className="pl-5">
                    <h3 className="font-bold text-red-600">
                        <Link to="/chinatown">Chinatown</Link>
                    </h3>
                    <p>Cultural heart of the Chinese community.</p>
                </div>
            </div>

            <div className="flex gap-2 p-2">
                <div className='w-20 h-20'>
                    <img src={logo9} alt='pix'/>
                </div>
                <div className="pl-5">
                    <h3 className="font-bold text-red-600">
                        <Link to="/quincymarket">Quincy Market</Link>
                    </h3>
                    <p>Historic market complex near Faneuil Hall.</p>
                </div>
            </div>
            <div className="flex gap-2 p-2">
                <div className='w-20 h-20'>
                    <img src={logo10} alt='pix'/>
                </div>
                <div className="pl-5">
                    <h3 className="font-bold text-red-600">
                        <Link to="/bostoncommon">Boston Common</Link>
                    </h3>
                    <p>Central public park in downtown area.</p>
                </div>
            </div>

        </>
    );
}