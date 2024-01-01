import React, { useState, useEffect, useRef } from 'react';

function InfiniteScroll() {

    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const lastElementRef = useRef(null);
    const observer = useRef();
    const controllerRef = useRef(null)

    const getSearchData = async (page = null) => {
        try {

            setLoading(true);

            if (controllerRef.current) controllerRef.current.abort();
            controllerRef.current = new AbortController();

            const response = await fetch('https://openlibrary.org/search.json?' + new URLSearchParams({ q: query, page: page ? page : pageNumber }), { signal: controllerRef.current.signal });
            const data = await response.json();
            page && setPageNumber(page);
            setBooks((prev) => [...prev, ...data.docs]);
        } catch (error) {
            console.log(`Error Getting Data for Books : `, error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSearchData();

    }, [query])

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        getSearchData();
    }

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio <= 0) return;
            else getSearchData(pageNumber + 1);
        })

        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }

        return () => {
            observer.current.unobserve();
        }
    }, [getSearchData])

    return (
        <>
            <div style={{ display: 'flex' }}>
                <input value={query} onChange={handleChange} />
                <div onClick={handleSearch} style={{ marginLeft: '10px' }}>
                    Search
                </div>
            </div>
            {
                books.length > 0 && books.map((book, index) => {
                    return (
                        <div key={book.title} ref={index === books.length - 1 ? lastElementRef : null}>
                            {book?.title}
                        </div>
                    )
                })
            }
            {
                loading &&
                <div>
                    Loading....
                </div>
            }
        </>
    )
}

export default InfiniteScroll;
