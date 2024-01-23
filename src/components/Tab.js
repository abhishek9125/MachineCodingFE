import React, { createContext, useContext } from 'react';

const TabContext = createContext();

export default function Tab({ value, onChange, children }) {
    
    return (
        <div>
            <TabContext.Provider value={{ value, onChange }}>
                {children}
            </TabContext.Provider>
        </div>
    )
}

Tab.HeadContainer = ({ children }) => {
    return (
        <div className="head-container">
            {children}
        </div>
    )
}

Tab.Item = function Item({ label, index }){

    const { value, onChange } = useContext(TabContext);

    const handleClick = () => {
        onChange(index);
    }

    return (
        <div onClick={handleClick} className={`tab-item ${value === index ? "active" : null}`}>
            {label}
        </div>
    )
}

Tab.ContentContainer = ({ children }) => {
    return (
        <div className="content-container">
            {children}
        </div>
    )
}

Tab.Content = function Content({ index, children }) {

    const { value } = useContext(TabContext);

    return (
        <div>
            {value == index ? children : null}
        </div>
    )
}
