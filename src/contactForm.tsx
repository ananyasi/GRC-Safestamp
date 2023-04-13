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

        const onSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            await submit({ firstName, lastName, email, message });
            alert("Form submitted");
        };

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [isClientInvestor, setIsClientInvestor] = useState(false);

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Contact Us</h2>
                <form onSubmit={onSubmit} noValidate >
                    <div className="blurb" style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '1rem' }}> Reach out to us by filling out this form!</p>
                        <p> If you're an interested client or investor, please also indicate so below.</p>
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
                    <div className="clientinvestor-checkbox">
                        <input
                            type="checkbox"
                            id="isClientInvestor"
                            checked={isClientInvestor}
                            onChange={(e) => setIsClientInvestor(e.target.checked)}
                        />
                        <label htmlFor="isClientInvestor">Client or Investor</label>
                    </div>
                    <div className='message'>
                        <label htmlFor="message">Message</label>
                        <textarea rows = {6} cols = {40} value={message} onChange={(e) => setMessage(e.target.value)}/>
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