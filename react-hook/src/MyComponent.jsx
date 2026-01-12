import React, { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Applicant");
    const [age, setAge] = useState(13);
    const [frontend, setFrontend] = useState(true);

    const updateName = () => {
        setName("Jardani");
    }

    const clearName = () => {
        setName("");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const resetAge = () => {
        setAge(13);
    }

    const toggleStatus = () => {
        setFrontend(!frontend);
    }

    return (<div>
        <p className="label">Name: {name}</p>
        <button onClick={updateName} className="button">Set</button><button onClick={clearName} className="button">Clear</button>
        <p className="label">Age: {age}</p>
        <button onClick={incrementAge} className="button">Increase</button><button onClick={resetAge} className="button">Reset</button>
        <p className="label"> Frontend: {frontend ? "Yes" : "No"}</p>
        <button onClick={toggleStatus} className="button">Frontend Experience</button>
    </div>)
}

export default MyComponent