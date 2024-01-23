import React, { useState } from 'react'
import Tab from './Tab'
import '../styles/menu.css';

function Menu() {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleTabChange = (newActiveIndex) => {
        setActiveIndex(newActiveIndex);
    }

    return (
        <div>
            <Tab value={activeIndex} onChange={handleTabChange}>
                <Tab.HeadContainer>
                    <Tab.Item label="Tab1" index={1} />
                    <Tab.Item label="Tab2" index={2} />
                    <Tab.Item label="Tab3" index={3} />
                </Tab.HeadContainer>

                <Tab.ContentContainer>
                    <Tab.Content index={1}>
                        <h1>This is Content1</h1>
                    </Tab.Content>
                    <Tab.Content index={2}>
                        <h1>This is Content2</h1>
                    </Tab.Content>
                    <Tab.Content index={3}>
                        <h1>This is Content3</h1>
                    </Tab.Content>
                </Tab.ContentContainer>
            </Tab>
        </div>
    )
}

export default Menu
