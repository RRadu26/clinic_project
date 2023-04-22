import React, {Component} from 'react'
import './register_style.css'
import { NavLink } from 'react-router-dom';
class Forgotpass extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            error: 0
        }
    }
    validate_input = () => {
        if(!(this.state.email.endsWith('@gmail.com') || this.state.email.endsWith('@yahoo.com'))) {
            this.setState({error: 1})
            return false;
        }

        this.setState({error:0})
        return true;
    }
    submit_newpass_request = (event) =>{
        event.preventDefault();
        let vlaid = this.validate_input();
        this.setState({email: ''});

    }

    ev_email = (event) => {
        this.setState({email : event.target.value});
    }

    render() {
    return (
        <div className='base'>
            <div className="login">

            <div className= "password_change">
                <p style={{fontSize: 35,paddingTop: 30}}>Forgot Password</p>
                <p style={{fontSize: 17, textAlign: 'start', margin: 10}}>Please enter the email address you'd like your password reset information send to</p>
                <form onSubmit={this.submit_newpass_request}>
                    <label >Email</label>
                    <input type = "text"  placeholder= 'type your email' value = {this.state.email} onChange = {this.ev_email}/>

                    <div className = "buttonc">
                    <button>send</button>
                    {this.state.error == 1 && <p style={{fontSize:17, color: 'red'}}>Invalid email</p>}

                    </div>
                    <p style={{fontSize:17, marginTop:250}}>Not a member? <NavLink to = "../register" style={{textDecoration: "none"}}>Register</NavLink> </p>

                </form>
            </div>
            </div>
        </div>
    );
    }
}

export default Forgotpass;