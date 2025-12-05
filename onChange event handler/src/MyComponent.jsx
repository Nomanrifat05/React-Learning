
import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("");
    const [Quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [shipping, setShipping] = useState("Delivery");
    
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentMethodChange(event) {
        setPaymentMethod(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
             <input value={name} onChange={handleNameChange} placeholder="Enter your name" />
             <p>Your name is: {name}</p>

            <input type="number" value={Quantity} onChange={handleQuantityChange} placeholder="Enter quantity" />
            <p>Quantity: {Quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
            <p>Your comment: {comment}</p>

            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>
            <p>Selected payment method: {paymentMethod}</p>
            
            <label>
                 <input type ="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange} />
                 Pick Up
            </label> <br/>
            <label>
                 <input type ="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange} />
                 Delivery
            </label>
            <p>Selected shipping method: {shipping}</p>    
          
        </div>
    );
}

export default MyComponent;

// This component is a placeholder for the onChange event handler example. 
// You can add form elements like <input>, <textarea>, etc., and implement the onChange event handler to see how it works.