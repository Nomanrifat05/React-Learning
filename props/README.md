# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📘 React Props, PropTypes, DefaultProps, and State (Markdown Notes)

## 🧩 1. What Are Props?

**Props (properties)** are _read-only inputs_ passed from a **parent component** to a **child component**.\
They make components reusable and dynamic.

Example:

`<Student name="Alice" age={20} />`

Inside the component:

`function Student(props) {
  return <p>Name: {props.name}</p>;
}`

**Props are:**

- passed from parent → child

- immutable (read-only)

- used for configuration or displaying data

---

## 🧪 2. What Is PropTypes?

**PropTypes** is a type-checking feature in React.\
It makes sure components receive props with the correct **data type**.

Example:

`Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
  grade: PropTypes.string.isRequired
};`

Why use PropTypes?

- catches bugs early

- improves code readability

- helps you know what props a component expects

---

## 🧱 3. What Is DefaultProps?

**defaultProps** provide **default values** for props **when the parent does not pass them**.

Example (older React method):

`Student.defaultProps = {
  name: "Guest",
  age: 18,
  isStudent: true,
  grade: "C"
};`

⚠️ **But in modern React (17+), defaultProps do NOT work reliably with function components.**

### ✔ Recommended Modern Way (Destructuring Defaults)

`function Student({
  name = "Guest",
  age = 18,
  isStudent = true,
  grade = "C"
}) {
  return <p>Name: {name}</p>;
}`

---

## 🔄 4. Props vs State

| Feature          | Props          | State                  |
| ---------------- | -------------- | ---------------------- |
| Who controls it? | Parent         | Component itself       |
| Can update it?   | ❌ No          | ✔ Yes                  |
| Read-only?       | ✔ Yes          | ❌ No                  |
| Used for?        | Receiving data | Managing internal data |

### Example of State:

`const [count, setCount] = useState(0);`

### Example of Props:

`<Counter initialValue={10} />`

---

## 🧠 Summary

- **Props** → external data passed into a component

- **PropTypes** → type checking for props

- **defaultProps** → fallback values (deprecated for functions)

- **State** → internal, changeable data inside a component
