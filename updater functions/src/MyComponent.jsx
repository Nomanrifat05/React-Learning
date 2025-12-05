
import React, { useState } from 'react';

// MyComponent demonstrates the use of updater functions in state management
function MyComponent() {
  const [count, setCount] = useState(0);


  function increment() {
    // Using an updater function to ensure we get the latest state
    


    //Takes the previous state to calculate the next state. 
    // React puts your updater function in a queue (waiting in line) 
    // During the next render, it will call them in the same orer.




    // setCount(count +1);
    // setCount(count +1);        
    // setCount(count +1); 
    
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);        
    setCount((prevCount) => prevCount + 1);
    
    



  };

  function decrement() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  function reset() {

    setCount(0);


    // setCount(() => 0);

  };


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>        
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default MyComponent;