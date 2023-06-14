import React, {useState} from 'react';
import Header from "./Header"
import Section from "./Section"


function MainView() {
    const [inputValue, setInputValue] = useState(null);
    console.log(inputValue)
    return (
        <>
            <Header header='Drip drip Bratku' setInputValue={setInputValue} />
            <Section inputValue={inputValue} />
        </>
    )
}

export default MainView