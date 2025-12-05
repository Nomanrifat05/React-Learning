//React hook = Special function that allows functional comoponents
//             to use React Features without writing class components
//              (useState, useEffect, useContext, useReducer, useRef, useReducer, useMemo, useCallback)

// useState =  allows functional components to have state variables
//             returns an array with 2 elements: current state value and a function to update that state value
//             syntax: const [state, setState] = useState(initialState);

// useState = A React hook that allows the creation of a stateful variable 
//            AND a setter function to update its value in the Virtual DOM. 
//              [name, setName] = useState('Noman');

import Counter from "./Counter";
import MyComponent from "./MyComponent";
function App() {

  return (
    <>
      <Counter />

      <MyComponent />
    </>
  )
}

export default App
