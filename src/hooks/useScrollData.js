import { useEffect, useState } from "react";

function useScrollData(query, pageNumber) {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = (signal) => {
        setLoading(true)
        fetch(`http://openlibrary.org/search.json?q=${query}&page=${pageNumber}`, { signal })
        .then((res) => res.json())
        .then((res) => {
            setBooks((prevBooks) => {
                return [...new Set([...prevBooks, ...res.docs.map((b) => {
                    return b.title
                })])]
            })
        })
        .catch((error) => {
            if (error.name === "AbortError") {
                console.log("Fetch aborted");
            } else {
                setError(error);
            }
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;

        if(query.length > 0) {
            fetchData(signal);
        }

        return () => {
            abortController.abort();
        };
    }, [query, pageNumber])

    return { loading, error, books };

}

export default useScrollData;