import React, { useState } from 'react'

function Colors(){
    const [colors, setColors] = useState(['red', 'green', 'blue', 'orange', 'purple', 'navy', 'fushia'])
    const [randomColor, setRandomColor] = useState("")
    const [chosenColor, setChosenColor] = useState("")

    function updateColor(){
        setRandomColor(colors[Math.floor(Math.random() * colors.length)])
    }

    function handleChosenColor(event){
        setChosenColor(event.target.value)
    }

    return(
        <>
            <h2>Colors</h2>
            <h3>Select One:</h3>
            <div style={{ marginBottom: '2em'}}>
                <select onChange={handleChosenColor}>
                    {colors.map(color => {
                        return <option key={color} value={color}>{color}</option>
                    })}
                </select>
            </div>
           
            <h3>Once you have selected one above, click below to randomly set the box color!</h3>
            <button onClick={updateColor}>Change Color</button>
            <div style={{ 
                width: "5em", 
                height: "5em",
                border: "3px solid #000",
                display: "block",
                margin: "2em auto", 
                borderRadius: '5px',
                background: randomColor }}></div>

            <h2>Did they match?</h2>    
            <p><strong>Random:</strong> {randomColor}</p>
            <p><strong>Chosen:</strong> {chosenColor}</p>
            <p style={{ color: chosenColor}} ><strong>{randomColor === chosenColor ? 'They MATCH!' : 'They dont! Try again!'}</strong></p>
        </>
    )
}

export default Colors