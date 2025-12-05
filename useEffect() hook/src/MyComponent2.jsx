//useEffect(function, [dependencies])

import React, { useState, useEffect} from 'react';

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

        // window.addEventListener('resize', handleResize); // which is not optimal. Its better to add it inside useEffect to avoid multiple event listeners being added on every render.
        // console.log('Event Listener Added');
    
    useEffect(() => {
        window.addEventListener('resize', handleResize); // strict mode will call this twice in dev mode to help identify side effects
        console.log('Event Listener Added');

        return () => {
            window.removeEventListener('resize', handleResize); // cleanup function to remove event listener when component unmounts
            console.log('Event Listener Removed');
        }
    }, []); //Runs only on mount

    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
    }, [width, height]); //Runs on mount and when 'width' or 'height' changes


     return(<>
        <p>window Width: {width} px</p>
        <p>window Height: {height} px</p>
     </>)

}

export default MyComponent2;