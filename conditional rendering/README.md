# 📘 React Conditional Rendering --- Full Learning Guide

This README explains **conditional rendering in React** using a simple example. Conditional rendering allows components to show different UI based on conditions such as login status, user actions, or application state.

---

## 🧩 Example Component: `UserGreeting`

`function UserGreeting(props) {

    const welcomeMessage = (
        <h2 className="welcome-message">
            Welcome back, {props.username}!
        </h2>
    );

    const loginPrompt = (
        <h2 className="login-prompt">
            Please log in to continue.
        </h2>
    );

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}

export default UserGreeting;`

---

## 🔍 Understanding `{props.username}`

### 💡 What is `{props.username}`?

- `props` is an object containing all the data passed from the parent component.

- `props.username` accesses the **username value** that the parent component sent.

Example parent:

`<UserGreeting isLoggedIn={true} username="Noman" />`

Here:

- `props.isLoggedIn` → `true`

- `props.username` → `"Noman"`

So this line:

`Welcome back, {props.username}!`

becomes:

`Welcome back, Noman!`

### 💡 Why is `{}` used?

In JSX, `{}` allows you to write **JavaScript inside HTML-like code**.

Example:

`<h2>Hello, {5 + 5}</h2>  // output: Hello, 10`

So `{props.username}` is simply JavaScript running inside JSX to show dynamic data.

---

## 🧠 How the Component Works

1.  **If the user is logged in**, it shows a personalized welcome message:

`Welcome back, {props.username}!`

1.  **If not logged in**, it shows:

`Please log in to continue.`

1.  It uses a **ternary operator**:

`return props.isLoggedIn ? welcomeMessage : loginPrompt;`

---

## 🧪 Using `UserGreeting` in App.js

`import UserGreeting from "./UserGreeting";

function App() {
return (
<>
<UserGreeting
        isLoggedIn={true}
        username="Noman"
      />
</>
);
}

export default App;`

### Result (Because isLoggedIn = true)

`Welcome back, Noman!`

---

## 💡 Why Use Conditional Rendering?

Conditional rendering is useful when:

- Showing **logged-in vs logged-out** views

- Displaying **loading animations**

- Showing **errors**

- Displaying **different UI for admin vs user**

- Showing **messages based on state**

---

## 🔄 Other Conditional Rendering Methods

### ✔ Using `if`:

`if (isLoggedIn) {
return <h2>Welcome back!</h2>;
}

return <h2>Please log in.</h2>;`

### ✔ Using Logical AND `&&`:

`{isLoggedIn && <p>You have 5 messages.</p>}`

---

## 🧠 Summary

- `{props.username}` inserts dynamic data into JSX.

- Conditional rendering chooses what to display based on a condition.

- The ternary operator makes code short and clean.

- Useful for login systems, loading states, role-based UI, warnings, etc.
