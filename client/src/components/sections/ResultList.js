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

    // const results = [
    //     {
    //         id: 1, name: 'Fenway Park', image: 'http://dummyimage.com/108x100.png/cc0000/ffffff', detail: 'Lorem10',
    //     }, {
    //         id: 2, name: 'The Garden', image: 'http://dummyimage.com/108x100.png/cc0000/ffffff', detail: 'Lorem10',
    //     }, {
    //         id: 3, name: 'MoFA', image: 'http://dummyimage.com/108x100.png/cc0000/ffffff', detail: 'Lorem10',
    //     }, {
    //         id: 4, name: 'Copley', image: 'http://dummyimage.com/108x100.png/cc0000/ffffff', detail: 'Lorem10',
    //     }
    // ]

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