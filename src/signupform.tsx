import './signupform.css'
import React from "react";



export class signupform extends React.Component{
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
export default signupform


// function SignUpForm() {
//     const [count, setCount] = useState(0)
//
//     return (
//         <form action="/action_page.php">
//             <div className="container">
//                 <h2>Subscribe to our Safestamp Newsletter</h2>
//                 <p>Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why
//                     you should subscribe to our newsletter blabla.</p>
//             </div>
//
//             <div className="container" style="background-color:white">
//                 <input type="text" placeholder="Name" name="name" required>
//                     <input type="text" placeholder="Email address" name="mail" required>
//                         <label>
//                             <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter
//                         </label>
//             </div>
//
//             <div className="container">
//                 <input type="submit" value="Subscribe">
//             </div>
//         </form>
//     )
// }
//
