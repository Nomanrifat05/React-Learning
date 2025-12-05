// useContex() = React hook that allows you to share values 
//               between multiple components 
//               without passing a props through every level of the tree.

// PROVIDER COMPONENT
// 1. import React, {createContext} from 'react'
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}> 
//       <child /> 
//      </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import react, {useContext} from 'react'
// 2. import {MyContext} from './ComponentA'
// 3. const value = useContext(MyContext);


import ComponentA from "./ComponentA.jsx"
import React from "react";


function App() {

  return (
    <>
    <ComponentA />
    </>
  )
}

export default App
