import React, {useState, useEffect} from "react";

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=> {
         window.addEventListener("resize", handleResize);
         console.log("Event Listener Added");

         return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
         }

    }, [])

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
        <h1>Window Width: {width}px</h1>
        <h1>Window Height: {height}px</h1>
        </>
    )
}

export default MyComponent