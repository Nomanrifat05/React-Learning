// import ComponentD from "./ComponentD";

// function ComponentC(props) {

//     return (
//         <div className="box">
//         <h1>This is Component C</h1>
//         <ComponentD user={props.user}/>
//         </div>
//     )

// }
// export default ComponentC;


import react, {useContext} from 'react';
import { UserContext } from './ComponentA';
import ComponentD from "./ComponentD";

function ComponentC() {
    const user = useContext(UserContext);

    return (
        <div className="box">
        <h1>This is Component C</h1>
        <h2>{`Hello again ${user}`}</h2>
        <ComponentD/>
        </div>
    )

}
export default ComponentC;