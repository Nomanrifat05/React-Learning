React Stopwatch Project ⏱️
==========================

This is a simple yet functional Stopwatch built using **React**. It tracks hours, minutes, seconds, and milliseconds.

Below is a breakdown of how the code works, specifically designed for beginners learning **Hooks** and **Time Management** in JavaScript.

* * * * *

🧠 Key Concepts Used
--------------------

We use three special React "Hooks" to make this work:

1.  **`useState`**: The component's memory. When this data changes, the screen updates (re-renders).

    -   *Used for:* Tracking if the watch is running and the total time passed.

2.  **`useEffect`**: The trigger. It runs code automatically when something changes.

    -   *Used for:* Starting the timer interval when `isRunning` turns true.

3.  **`useRef`**: The hidden storage. It holds values that we need to remember, but changing them **doesn't** force the screen to update.

    -   *Used for:* Storing the Timer ID (to stop it later) and the exact moment we pressed "Start."

* * * * *

⚙️ How It Works: The Logic
--------------------------

### 1\. The Setup (State & Refs)

JavaScript

```
const [isRunning, setIsRunning] = useState(false);
const [elapsedTime, setElapsedTime] = useState(0);
const intervalRef = useRef(null);
const startTimeRef = useRef(0);

```

-   **`isRunning`**: Simply tells the app: "Are we counting right now?"

-   **`elapsedTime`**: The total milliseconds passed since we started.

-   **`startTimeRef`**: This is crucial. To calculate time accurately, we don't just add +1 every second. Instead, we take the **Current Time** and subtract the **Start Time**.

### 2\. The Engine (useEffect)

This is the heartbeat of the stopwatch.

JavaScript

```
useEffect(() => {
    if (isRunning) {
        intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);
    }

    return () => { clearInterval(intervalRef.current); };
}, [isRunning]);

```

-   **When `isRunning` becomes true:** We create an **Interval**. Every 10 milliseconds, it asks: *"What time is it now?"* and subtracts the *Start Time*. The result is stored in `elapsedTime`.

-   **The Math:**

    $$\text{Elapsed Time} = \text{Current Time} - \text{Start Time}$$

-   **The Cleanup (`return`)**: If the user presses stop, or the component disappears from the screen, we run `clearInterval`. This kills the timer so it doesn't keep running in the background and crash your browser.

### 3\. The Buttons

#### The Start Button (The Trickiest Part)

JavaScript

```
function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
}

```

Why Date.now() - elapsedTime?

Imagine you run for 5 seconds, then pause.

When you hit Start again, you want to resume from 5 seconds, not 0.

By doing this math, we essentially tell the computer: "Pretend I started running 5 seconds ago," so the timer continues seamlessly.

#### The Stop & Reset Buttons

-   **Stop**: Sets `isRunning` to false. The `useEffect` sees this and clears the interval.

-   **Reset**: Sets `elapsedTime` to 0 and `isRunning` to false.

* * * * *

🎨 Formatting the Time
----------------------

Raw milliseconds (e.g., `125039 ms`) are hard for humans to read. The `formatTime()` function converts that big number into `HH:MM:SS:MS`.

We use **Math** and the **Modulo Operator (%)** (which gives us the remainder of a division).

**Example for Seconds:**

1.  We have `125039` milliseconds.

2.  Divide by 1000 = `125.039` seconds.

3.  Modulo 60 (`% 60`) = The remainder is `5`.

4.  So, we are at the 5-second mark of the current minute.

**The Polish (`.padStart`)**

JavaScript

```
seconds = String(seconds).padStart(2, "0");

```

This ensures that if the number is `5`, it displays as `05`. It "pads" the start of the string with a zero if it isn't 2 digits long.

* * * * *

🚀 How to Run This
------------------

1.  Make sure you have a React environment set up.

2.  Copy the code into a file named `Stopwatch.js`.

3.  Import it into your main `App.js`:

    JavaScript

    ```
    import Stopwatch from './Stopwatch';

    function App() {
      return <Stopwatch />;
    }
    ```
The Code
--------------------
 ```

     Import React and the hooks we need
      import React, { useState, useEffect, useRef } from "react";

    function Stopwatch() {
    // ---------------- STATE ----------------
    // Tracks whether the stopwatch is running (true/false)
    const [isRunning, setIsRunning] = useState(false);
    // Holds total elapsed time in milliseconds
    const [elapsedTime, setElapsedTime] = useState(0);

    // ---------------- REFS ----------------
    // Stores the interval ID so we can stop/remove it later
    const intervalRef = useRef(null);
    // Stores the time when the stopwatch was last started
    // (Used for accurate pause + resume)
    const startTimeRef = useRef(0);

    // ---------------- USE EFFECT ----------------
    // This effect runs whenever "isRunning" changes
    useEffect(() => {
        // If stopwatch is running → create an interval
        if (isRunning) {
            // Set up an interval that runs every 10 milliseconds
            intervalRef.current = setInterval(() => {
                // Update elapsed time each tick using:
                // current time - start time + previous elapsed time
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        // CLEANUP FUNCTION:
        // Always clears the interval when:
        // - stopwatch stops
        // - component re-renders
        // - component unmounts
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]); // re-run effect only when isRunning changes

    // ---------------- FUNCTIONS ----------------
    // Start the stopwatch (or resume)
    function start() {
        setIsRunning(true);
        // Adjust start time to account for previously elapsed time
        startTimeRef.current = Date.now() - elapsedTime;
    }

    // Stop/pause the stopwatch
    function stop() {
        setIsRunning(false);
    }

    // Reset stopwatch to 0
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    // ----------- FORMAT TIME FUNCTION -----------
    // Converts milliseconds → HH:MM:SS:CC format
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10); // centiseconds

        // Pad with leading zeros
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    // ---------------- JSX (UI) ----------------
    return (
        <div className="stopwatch">
            {/* Display formatted time */}
            <div className="display">{formatTime()}</div>

            {/* Buttons section */}
            <div className="controls">
                <button onClick={start} className="start-button">
                    Start
                </button>
                <button onClick={stop} className="stop-button">
                    Stop
                </button>
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
            </div>
        </div>
    );
}

// Export component so it can be used in App.js
export default Stopwatch;
    
