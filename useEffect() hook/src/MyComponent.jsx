// useEffect() = React hook that tells React Do SOME CODE WHEN (pick one): 
//             This component re-renders
//             This component mounts (is added to the DOM)
//             This component unmounts (is removed from the DOM)
//             The state of a value
//             State or props change

// useEffect(function, [dependencies])

//1. useEffect(() => {})    //Runs on every render
//2. useEffect(() => {}, []) //Runs only on mount
//3. useEffect(() => {}, [value]) //Runs on mount and when 'value' changes




//USES
// #1 Event listeners (resize, scroll, etc)
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 fetching Data from an API
// #5 Clean up when a component unmounts


import React, { useState, useEffect } from 'react';


function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    // useEffect(() => {
    //     document.title = `count: ${count}`; //Runs on every render
    // });

    // useEffect(() => {
    //     document.title = `My Counter Program`; //Runs only on mount
    // }, []);

    // useEffect(() => {
    //     document.title = `count: ${count} ${color}`;
    // }, [count, color]); //Runs on mount and when 'count' or 'color' changes

    useEffect(() => {
        document.title = `count: ${count} ${color}`;

        return () => {
            console.log(`Count with color: ${count} ${color}`);
        }
    }, [count, color]); //Runs on mount and when 'count' or 'color' changes



    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green');
    }
    return(<>
        <p style={{color: color}}>{count}</p>
        <button onClick={addCount}>Add </button>
        <button onClick={subtractCount}>Subtract </button>
        <button onClick={changeColor}>Change Color </button>
    </>)

}

export default MyComponent; 
