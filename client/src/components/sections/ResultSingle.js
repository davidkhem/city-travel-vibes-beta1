import {Link} from "react-router-dom";
import Header from "../Header";

export default function ResultSingle(result) {
    return (
        <div>
            <Header/>

            <img src={result.image} alt=''/>
            <h2>{result.name}</h2>

        </div>
    )
}