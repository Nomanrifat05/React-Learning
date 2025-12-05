import styles from "./Button.module.css" // CSS Modules
function Button() {

    // Inline CSS styles
    const styles1 = {
            backgroundColor: "#18c575ff", /* Green */
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "12px"
        }
    return(
        <>
        <button className={styles.button1}>Click Me</button> {/* CSS Modules */}
        <button style={styles1}>Click Me pls</button> {/* Inline CSS styles */}
         
        </>
    );
}
export default Button;