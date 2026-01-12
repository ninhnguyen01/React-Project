import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    useEffect(()=> {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])

    function addCount() {
        setCount(c => c + 1);
    }

    function resetCount() {
        setCount(c => c = 0);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor (c => c === "green" ? "red" : "green");
    }

    return(
        <>
        <h1 style={{color: color}}>Count: {count}</h1>
        <button onClick={addCount}>Add</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={subtractCount}>Subtract</button>
        <br></br>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent;