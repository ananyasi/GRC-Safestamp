import './contactForm.css'
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "GyJhhzXJ";

export const Application = () => {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

        const onSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            await submit({ firstName, lastName, email, message });
            alert("Form submitted");
        };

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Contact Us</h2>
                <form onSubmit={onSubmit} noValidate >
                    <div className="blurb">
                        <p>Your blurb text goes here. You can write a short description, instructions, or any other relevant information.</p>
                    </div>
                    <div className='firstName'>
                        <label htmlFor="firstName">First Name</label>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='lastName'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='message'>
                        <label htmlFor="message">Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className='submit'>
                        <button type = "submit" disabled={submitting}> Submit Message </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Application