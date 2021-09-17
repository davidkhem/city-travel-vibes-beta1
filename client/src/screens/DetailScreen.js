import ResultSingle from "../components/sections/ResultSingle";
import supabase from "../supabase";
import {useEffect, useState} from "react";

export default function DetailScreen() {

    const [resultsD, setResultDetail] = useState(null)


    useEffect(() => {

        async function getResultDetail() {
            let { data: resultsD, error } = await supabase
                .from('results')
                .select('id, image, name, content')
                .range(0, 4)

            setResultDetail(resultsD)

        }

        getResultDetail()

    }, [])


    return (
        <>
            {
                (resultsD)
                    ?resultsD.map(result => <ResultSingle result={result} key={result.id}/> )
                    : <p>Loading results...</p>
            }

        </>
    )


}