import ResultListItem from "./ResultListItem";
import supabase from "../../supabase";
import {useEffect, useState} from "react";

export default function ResultList() {

    const [results, setResults] = useState(null)


    useEffect(() => {

        async function getResults() {
            let { data: results, error } = await supabase
                .from('results')
                .select('id, image, name, detail')
                .range(0, 4)

            setResults(results)

        }

        getResults()

    }, [])


    return (
        <>
            {
                (results)
                ?results.map(result => <ResultListItem result={result} key={result.id}/> )
                : <p>Loading results...</p>
            }

        </>
    )


}