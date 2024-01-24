import React, { useState, useRef, useCallback } from 'react'
import useScrollData from '../hooks/useScrollData';

function InfiniteScroll() {

    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    const observer = useRef()

    const { loading, error, books } = useScrollData(query, pageNumber);

    const lastBookElementRef = useCallback((node) => {
        if(loading) return;

        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setPageNumber(prev => prev + 1);
            }
        })

        if(node) observer.current.observe(node);

    }, [loading])

    
    const handleChange = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
    }

    return (
        <div>
            <input onChange={handleChange} value={query}  />
            {
                books.map((book, index) => {
                    return (
                        <div ref={books.length - 1 == index ? lastBookElementRef : null} key={book}>
                            {book}
                        </div>
                    )
                })
            }
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </div>
    )
}

export default InfiniteScroll
