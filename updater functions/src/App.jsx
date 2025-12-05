
//updater function = A function passed as an argument to setState() usually 
//                   ex. setYear(arrow function) mean updater function . 
//                   Allow for safe updates based on the previous state 
//                   Used with multiple state updates and asynchronous functions 
//                   Good practice to use updater functions when new state depends on previous state

import MyComponent from './MyComponent'
function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App
