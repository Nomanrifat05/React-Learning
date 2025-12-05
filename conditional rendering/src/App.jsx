//conditional rendering = allows you to control what gets rendered based on certain conditions
//                         (show, hide, change components or modify parts of the UI based on application state or user interactions)
import UserGreeting from "./UserGreeting";
function App() {

  return (
    <>
    <UserGreeting isLoggedIn={true} username="Noman" />
    </>
  )
}

export default App
