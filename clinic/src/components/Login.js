import React from 'react'
import { NavLink } from 'react-router-dom';

import './login_style.css'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: 0
        }
    }
    validate_input = () => {
        if(this.state.email.length === 0 || this.state.password.length === 0){
            this.setState({error: 1})
            return false;
        }
        if(!(this.state.email.endsWith('@gmail.com') || this.state.email.endsWith('@yahoo.com'))) {
            this.setState({error: 2})
            return false;
        }
        if(this.state.password.length < 8) {
            this.setState({error:3})
            return false;
        }
        this.setState({error:0})
        return true;
    }
    submit_login = (event) =>{
        event.preventDefault();
        let valid = this.validate_input();
        this.setState({email : ''});
        this.setState({password: ''});

    }
    email_change = (event) => {
        this.setState({email : event.target.value});
    }

    password_change = (event) => {
        this.setState({password : event.target.value});
    } 

    render() {
    return (
        <div className="login">
            <p style={{fontSize: 35,paddingTop: 30}}>Login</p>

            <form onSubmit={this.submit_login}>
                <label style={{marginTop: 30, marginBottom:5} }>Email</label>

                <input type = "text" placeholder='type your email' value = {this.state.email} onChange = {this.email_change}/>

                <label style={{marginTop: 20, marginBottom:5}}>Password</label>

                <input type = "password" placeholder='type your password' style = {{width:300}}value = {this.state.password} onChange={this.password_change}/>

                <div className = "buttonc">
                <button>log in</button>
                </div>

            </form>
            <div style={{margin:5, marginLeft:195}}>
                <NavLink to = "passforgot" style={{textDecoration:"none", fontSize:17}}>forgot password? </NavLink>
            </div>
            {this.state.error === 1 && <p style={{fontSize:17, color: 'red'}}>All fields are required</p>}
            {this.state.error === 2 && <p style={{fontSize:17, color: 'red'}}>Invalid email</p>}
            {this.state.error === 3 && <p style={{fontSize:17, color: 'red'}}>Password must have minimum 8 characters</p>}

            <p style={{fontSize:17, marginTop:200}}>Not a member? <NavLink to = "register" style={{textDecoration: "none"}}>Register</NavLink> </p>
        </div>
    );
    }
}

export default Login;