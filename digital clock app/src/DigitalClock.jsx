import React, {useState, useEffect} from "react";   

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // const intervalId = setInterval(Callback,1000); //Callback function will be called every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime(){
        let hours = time.getHours(); 
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
         
        hours = hours % 12 || 12; // Convert to 12-hour format. when hours is 0, set it to 12. when hours is 13, set it to 1 etc. when hours is 8 AM, it remains 8.

        // return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridiem}`;
        
        // return `${hours}:${minutes}:${seconds} ${meridiem}`;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;


    }

    function padZero(number){
        return (number < 10 ? '0' : '') + number;
    }

    return(
           <div className="clock-container">
             <div className="clock">
                <span>{formatTime()}</span>
             </div>
           </div>
   );

}
export default DigitalClock;