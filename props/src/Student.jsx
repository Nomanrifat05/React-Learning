//propTypes = a mechanism to ensure that components use the correct data type and pass the right data, helping to catch bugs and improve code readability.
//         age=PropTypes.number

//defaultProps = default values for props in case they are not provided by the parent component.
//               name="Default Name"


import PropTypes from "prop-types";
 // props actual format

// function Student(props) {
//     return (
//         <div className="student">
//             <p>Student Name: {props.name}</p>
//             <p>Student Age: {props.age}</p>
//             <p>Student Grade: {props.grade}</p>
//             <p>Student: {props.isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }

//in modern React (17+), defaultProps do NOT work reliably with function components.
function Student({
    // Destructuring props with default values (Recommended Modern Way (Destructuring Defaults))
  name = "Guest",
  age = 18,
  isStudent = true,
  grade = "C"
}) {
  return (
    <div className="student">
      <p>Student Name: {name}</p>
      <p>Student Age: {age}</p>
      <p>Student Grade: {grade}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}


Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
    grade: PropTypes.string.isRequired
};
// Student.defaultProps = {
//     name: "Guest",
//     age: 18,
//     isStudent: true,
//     grade: "C"
// };

export default Student;