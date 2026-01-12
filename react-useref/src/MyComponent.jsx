import React, { useState, useEffect, useRef } from "react";

function MyComponent() {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (<div>
        <button onClick={handleClick}>Click me!</button>
        <input ref={inputRef}></input>

        <button onClick={handleClick2}>Click me 2!</button>
        <input ref={inputRef2}></input>

        <button onClick={handleClick3}>Click me 3!</button>
        <input ref={inputRef3}></input>
    </div>);
}

export default MyComponent;