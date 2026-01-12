import React, { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [order, setOrder] = useState("Confirm");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleOrderChange(event) {
        setOrder(event.target.value);
    }

    return (<div>
        <h1>Hotel Booking</h1>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" min="1" />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter instructions..."></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Discover">Discover</option>
            <option value="Amex">Amex</option>
            <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>

        <label className="radio">
            <input type="radio" value="Confirm" checked={order === "Confirm"} onChange={handleOrderChange}></input>
            Confirm
        </label>

        <label className="radio">
            <input type="radio" value="Cancel" checked={order === "Cancel"} onChange={handleOrderChange}></input>
            Cancel
        </label>
        <p>Order Status: {order}</p>
        <button type="submit" value="submit">Submit</button>
    </div>)
}

export default MyComponent