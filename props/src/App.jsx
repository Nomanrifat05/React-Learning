// Props (properties) are read-only inputs you pass from a parent 
// component to a child component.

// Think of props like arguments to a function.



// props = read-only properties that are shared between components.
//        A parent component can send data to a child component using props.import React from 'react'
//        <Component key="value" />


import Student from "./Student"
function App() {

  return (
    <>
    <Student name="Alice" age={20} grade="A" isStudent={true} />
    <Student name="Bob" age={22} grade="B" isStudent={false} />
    <Student name="Charlie" age={21} grade="A+" isStudent={true} />
    <Student />
    </>
  )
}

export default App
