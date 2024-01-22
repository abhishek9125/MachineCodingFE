import React, { useEffect, useState } from 'react'
import '../styles/pagination.css';

const PRODUCTS_PAGE = 6;

function Pagination() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${PRODUCTS_PAGE}&skip=${PRODUCTS_PAGE*(page - 1)}`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / PRODUCTS_PAGE));
        } catch(error) {
            console.log('Error Fetching Products : ', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [page])

    const handlePageChange = (pageNumber) => {
        if(pageNumber < 1 || pageNumber > totalPages) {
            return;
        }
        setPage(pageNumber);
    }
    
    return (
        <>
            <div className="products-wrapper">
                {
                    products.length > 0 && products.map((product) => {
                        return (
                            <div className="product-card" key={product.id}>
                                <img src={product.thumbnail} alt={product.title}/>
                                <div className="product-title">
                                    {product.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                products.length > 0 && 
                <div className="navigation-wrapper">
                    <div className="navigation-box" onClick={() => handlePageChange(page-1)}>⬅️</div>
                    {
                        [...Array(totalPages)].map((_, i) => {
                            return (
                                <div className={`navigation-box ${(page === i + 1) && 'selected'}`} onClick={() => handlePageChange(i+1)}>
                                    {i + 1}
                                </div>
                            )
                        })
                    }
                    <div className="navigation-box" onClick={() => handlePageChange(page+1)}>➡️</div>
                </div>
            }
        </>
    )
}

export default Pagination
