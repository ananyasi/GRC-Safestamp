import './signupform.css'
import React from "react";


export class SignUpform extends React.Component{
    handleChange = (event : any) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({[name]: value});
        console.log(this.state) ;
    }
    handleSubmit = (event : any) => {}


    constructor(props: any) {
        super(props);
        this.state = {
            username : null,
            email : null,
            password : null
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Sign Up</h2>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className='firstName'>
                            <label htmlFor="firstName">Full Name</label>
                            <input type='text' name='firstName' onChange=            {this.handleChange}/>
                        </div>
                        <div className='lastName'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type='text' name='lastName' onChange=            {this.handleChange}/>
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' onChange={this.handleChange}/>
                        </div>
                        <div className='submit'>
                            <button>Register Me</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



