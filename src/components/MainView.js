import React, {useState} from 'react';
import Header from "./Header"
import Section from "./Section"


function MainView() {
    const [inputValue, setInputValue] = useState(null);
    const [weightValue, setWeightValue] = useState(null)
    return (
        <>
            <Header header='Drip drip Bratku' setInputValue={setInputValue} setWeightValue={setWeightValue} />
            <Section inputValue={inputValue} weightValue={weightValue} />
        </>
    )
}

export default MainView