import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { sha3_256 } from 'js-sha3';
import './login_style.css'
const url = "http://localhost:8080/login/logme"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const validate_input = () => {
        if(email.length === 0 || password.length === 0){
            setError(1)
            return false;
        }
        if(!(email.endsWith('@gmail.com') || email.endsWith('@yahoo.com'))) {
            setError(2)
            return false;
        }
        if(password.length < 8) {
            setError(3)
            return false;
        }
        setError(0)
        return true;
    }

    const HandleSubmit = async (event) =>{
        event.preventDefault();
        let valid = validate_input();
        if(valid) {
            let passkey = sha3_256(password);
            const credentials = {email:email, password:passkey}
            const response = await fetch(url, {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(credentials)
            })
            const responseStatus = await response.text()
            console.log(responseStatus)
        }
        setPassword('')
    }

    return (
        <div className="login">
            <p style={{fontSize: 35,paddingTop: 30}}>Login</p>

            <form onSubmit={HandleSubmit}>

                <label style={{marginTop: 30, marginBottom:5} }>Email</label>
                <input type = "text" placeholder='type your email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>

                <label style={{marginTop: 20, marginBottom:5}}>Password</label>
                <input type = "password" placeholder='type your password' style = {{width:300}}value = {password} onChange={(e) => setPassword(e.target.value)}/>

                <div className = "buttonc">
                <button>log in</button>
                </div>

            </form>
            <div style={{margin:5, marginLeft:195}}>
                <NavLink to = "passforgot" style={{textDecoration:"none", fontSize:17}}>forgot password? </NavLink>
            </div>
            {error === 1 && <p style={{fontSize:17, color: 'red'}}>All fields are required</p>}
            {error === 2 && <p style={{fontSize:17, color: 'red'}}>Invalid email</p>}
            {error === 3 && <p style={{fontSize:17, color: 'red'}}>Password must have minimum 8 characters</p>}

            <p style={{fontSize:17, marginTop:200}}>Not a member? <NavLink to = "register" style={{textDecoration: "none"}}>Register</NavLink> </p>
        </div>
    );
}

export default Login;