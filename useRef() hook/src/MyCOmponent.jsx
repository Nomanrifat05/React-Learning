//useState() = Re-renders the component when the state value changes.


//useRef() = "use Reference" Does not cause re-render when its value changes. 
//           when you want a component to "remember" some information, 
//           but you dont want that information to trigger new renders.



// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Trimers and Intervals
// 4. Storing Mutable Values
// 5. Keeping Previous State Values


import React, { useState, useEffect, useRef, use } from 'react';


function MyComponent() {
    //let [number, setNumber] = useState(0);
  
    //from main.jsx remove StrictMode to avoid double rendering in dev mode.

   // const ref = useRef(0); //Initial value is 0

   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);
   const inputRef3 = useRef(null);

    useEffect(() => {
        console.log('Component Rendered');
    });


    function handleClick1(){
        // setNumber(n => n + 1);
       
     //   ref.current++;
     //   console.log(ref.current);
     
     inputRef1.current.focus();
     inputRef1.current.style.backgroundColor = 'yellow';
     inputRef2.current.style.backgroundColor = '';
     inputRef3.current.style.backgroundColor = '';
    }


    function handleClick2(){
      inputRef2.current.focus();
     inputRef1.current.style.backgroundColor = ''
     inputRef2.current.style.backgroundColor = 'yellow'
     inputRef3.current.style.backgroundColor = ''
}
    function handleClick3(){
      inputRef3.current.focus();
     inputRef1.current.style.backgroundColor = ''
     inputRef2.current.style.backgroundColor = ''
     inputRef3.current.style.backgroundColor = 'yellow'
} 

      return(
        <div>
        <button onClick={handleClick1}>
        CLick me 1!
        </button>
        <input ref={inputRef1}/>
        <br />
        <br />
        <button onClick={handleClick2}>
        CLick me 2!
        </button>
        <input ref={inputRef2}/>
        <br />
        <br />
        <button onClick={handleClick3}>
        CLick me 3!
        </button>
        <input ref={inputRef3}/>
        </div>
      );
}
export default MyComponent;

















// // here use useState to manage which input is focused and use refs to access the DOM elements.

// import React, { useState, useEffect } from 'react';


// function MyComponent() {

//   const [input1Focus, setInput1Focus] = useState(false);
//   const [input2Focus, setInput2Focus] = useState(false);
//   const [input3Focus, setInput3Focus] = useState(false);

//   useEffect(() => {
//     console.log('Component Rendered');
//   });

//   function handleButtonClick(inputNumber) {
//     setInput1Focus(inputNumber === 1);
//     setInput2Focus(inputNumber === 2);
//     setInput3Focus(inputNumber === 3);
//   }

//   return (
//     <div>
//       <button onClick={() => handleButtonClick(1)}>
//         Click me 1!
//       </button>
//       <input
//         ref={(inputRef) => {
//           if (inputRef) {
//             if (input1Focus) {
//               inputRef.focus();
//               inputRef.style.backgroundColor = 'yellow';
//             } else {
//               inputRef.style.backgroundColor = '';
//             }
//           }
//         }}
//       />
//       <br />
//       <br />

//       <button onClick={() => handleButtonClick(2)}>
//         Click me 2!
//       </button>
//       <input
//         ref={(inputRef) => {
//           if (inputRef) {
//             if (input2Focus) {
//               inputRef.focus();
//               inputRef.style.backgroundColor = 'yellow';
//             } else {
//               inputRef.style.backgroundColor = '';
//             }
//           }
//         }}
//       />
//       <br />
//       <br />

//       <button onClick={() => handleButtonClick(3)}>
//         Click me 3!
//       </button>
//       <input
//         ref={(inputRef) => {
//           if (inputRef) {
//             if (input3Focus) {
//               inputRef.focus();
//               inputRef.style.backgroundColor = 'yellow';
//             } else {
//               inputRef.style.backgroundColor = '';
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }
// export default MyComponent;