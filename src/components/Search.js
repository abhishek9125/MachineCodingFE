import React, { useEffect, useState } from 'react';
import '../styles/search.css';

const FRUIT_CONSTANT = [
    "Apple", "Orange", "Mango", "Grapes", "Papaya", "Pineapple"
]

function Search() {

    const [dropdown, setDropdown] = useState(false);
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setItems([]);
        if(value) {
            FRUIT_CONSTANT.forEach((item) => {
                if(item.toLowerCase().includes(value)) {
                    setItems((prev) => [...prev, (item)])
                }
            })
        }
    }, [value])

    useEffect(() => {
        setDropdown(items.length ? true : false)
    }, [items])

    return (
        <div className="search-wrapper">
            <div className="title">Search</div>
            <input 
                value={value}
                onChange={handleChange}
            />
            {
                dropdown && 
                <div className="box-wrapper">
                    {
                        items.map((item, index) => (
                            <div className="item" key={index}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Search
