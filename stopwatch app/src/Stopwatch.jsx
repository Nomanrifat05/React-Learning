import React, {useState, useEffect, useRef} from "react";

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false); //state to track if stopwatch is running or not
    const [elapsedTime, setElapsedTime] = useState(0); //how much time has he lapsed in milliseconds. to keep track of elapsed time with state variable.
    const intervalRef = useRef(null); //to store interval ID so that we can clear it later
    const startTimeRef = useRef(0); //to store the time when stopwatch was started.
    

    useEffect(() => {
        if(isRunning){
           intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10); //update elapsed time every 10 milliseconds
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRunning]); //using useEffect to monitor changes in isRunning state
   
   function start(){

       setIsRunning(true);
         startTimeRef.current = Date.now() - elapsedTime; //to handle resume functionality
   }

    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    
    }
    function formatTime(){
let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
let minutes = Math.floor(elapsedTime / (1000 * 60 ) %60);
let seconds = Math.floor(elapsedTime / (1000) % 60);
let milliseconds = Math.floor((elapsedTime % 1000) / 10);

hours = String(hours).padStart(2, '0');
minutes = String(minutes).padStart(2, '0');
seconds = String(seconds).padStart(2, '0');
milliseconds = String(milliseconds).padStart(2, '0');   


        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    
    }
   return(<dib className="stopwatch">  
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>  
          </dib>
    );  

}
export default Stopwatch;