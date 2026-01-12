function Button() {

    const handleClickDefault = (e) => e.target.textContent = "Click me 😃";
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";
    const handleClick2 = (e) => e.target.textContent = "OKAY! 😄";
    const handleClick3 = (e) => e.target.textContent = "SAD! 😭";

    return (
        <>
            <button className="button" onClick={handleClick} onDoubleClick={handleClickDefault}>Click me 😃</button>
            <button className="button" onClick={handleClick2} onDoubleClick={handleClickDefault}>Click me 😃</button>
            <button className="button" onClick={handleClick3} onDoubleClick={handleClickDefault}>Click me 😃</button>
        </>);

}

export default Button