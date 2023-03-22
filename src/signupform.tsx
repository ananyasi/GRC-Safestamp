import './signupform.css'
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "py17WqXT";

const Application = () => {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

        const onSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            await submit({ firstName, lastName, email });
            alert("Form submitted");
        };

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Sign Up</h2>
                <form onSubmit={onSubmit} noValidate >
                    <div className='firstName'>
                        <label htmlFor="firstName">Full Name</label>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='lastName'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='submit'>
                        <button type = "submit" disabled={submitting}> Register Me</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Application




