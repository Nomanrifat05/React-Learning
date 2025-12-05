import React, {useState} from "react";


function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmoloyed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Noman Rifat");
    }

    const updateAge = () => {
        setAge(30);
    }
    const toggleEmployment = () => {
        setIsEmployed(!isEmoloyed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>
            
            <p>Age: {age}</p>
            <button onClick={updateAge}>Update Age</button>
            
            <p>Employed: {isEmoloyed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployment}>Toggle Employment</button>
        </div>
    );
}
export default MyComponent;