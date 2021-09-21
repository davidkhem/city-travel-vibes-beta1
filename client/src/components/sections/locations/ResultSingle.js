import {Link, useParams} from "react-router-dom";
import Header from "../../Header";
import supabase from "../../../supabase";
import {useEffect, useState} from "react";

export default function ResultSingle() {
    const {id} = useParams()

    const [result, setResult] = useState()

    useEffect(async function(){
        let { data: results, error } = await supabase
            .from('results')
            .select('name, image, content')
            .eq("id",id)

        setResult(results)
        console.log(results)
    },[])



    return (
        <div>
            <Header/>

            <h2>${result.name}</h2>
            <p>{result.content}</p>

        </div>
    )
}