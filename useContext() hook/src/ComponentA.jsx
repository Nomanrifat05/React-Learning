// import React, {useState} from "react";
// import ComponentB from "./ComponentB";

// function ComponentA() {

//     const [user, setUser] = useState("Noman");

//     return (
//         <div className="box">
//         <h1>This is Component A</h1>
//         {/* <h2>Welcome {user}</h2> */}
//         <h2>{`Welcome ${user}`}</h2>
//         <ComponentB user={user}/> {/* passing user as prop to ComponentB */}
//         </div>
//     )

// }
// export default ComponentA;




import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Noman");

    return (
        <div className="box">
        <h1>This is Component A</h1>
        {/* <h2>Welcome {user}</h2> */}
        <h2>{`Welcome ${user}`}</h2>
        <UserContext.Provider value={user}>
        <ComponentB user={user}/> {/* passing user as prop to ComponentB */}
        </UserContext.Provider>
        </div>
    );

}
export default ComponentA;