import {Link} from "react-router-dom";

export default function ResultListItem({result}) {

    return (
            <div className="flex gap-2 p-2">
                <div>
                    <img src={result.image} alt='pix'/>
                </div>
                <div className="pl-5">
                    <h2>
                        <Link to={`/results/${result.id}`}>{result.name}</Link>
                    </h2>
                    <p>{result.detail}</p>
                </div>
            </div>
    );
}