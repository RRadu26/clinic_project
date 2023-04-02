import React from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './register_style.css'
import { sha3_256 } from 'js-sha3';
import axios from 'axios'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstname: '',
            surname: '',
            birthdate: '',
            error: 0,
            registered:false
        }
    }
    send_post = (credentials) => {
        axios.post('localhost::8080//patientaccount/add', credentials)
    }

    validate_input = () => {
        if(this.state.email.length === 0 || this.state.password.length ===0
            || this.state.firstname.length === 0 || this.state.surname ===0
            || this.state.birthdate === '') {
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

        submit_register  = (event) =>{

        event.preventDefault();
        let valid = this.validate_input();
        if(valid) {
            let passkey = sha3_256(this.state.password);
            const credentials = {email:this.state.email, password:passkey, 
                first_name:this.state.firstname, surname:this.state.surname,
                birthdate:this.state.birthdate};
            console.log(credentials);
            this.send_post(credentials)
            this.setState({registered:true})

        }
        this.setState({password: ''});

    }

    ev_email = (event) => {
        this.setState({email : event.target.value});
    }
    ev_password = (event) => {
        this.setState({password : event.target.value});
    }
    ev_firstname = (event) => {
        this.setState({firstname : event.target.value});
    }
    ev_surname = (event) => {
        this.setState({surname : event.target.value});
    }
    ev_date = (event) => {
        this.setState({birthdate : event.target.value})
    }

    render() {
    return (
        <div className= "register">
            <p style={{fontSize: 35,paddingTop: 30}}>Register</p>
            <div className='topbuttonsheader'>
            <label className='current'>Patient</label><NavLink className='topbuttons' to = "../registerdoctor">Doctor</NavLink>
            </div>
            <form onSubmit={this.submit_register}>

                <label >Email</label>
                <input type = "text" placeholder='type your email' value = {this.state.email} onChange = {this.ev_email}/>

                <label >Password</label>
                <input type = "password" placeholder='type your password' value = {this.state.password} onChange = {this.ev_password}/>

                <label >First Name</label>

                <input type = "text" placeholder='type your first name' value = {this.state.firstname} onChange = {this.ev_firstname}/>

                <label >Surname</label>

                <input type = "text" placeholder='type your surname' value = {this.state.surname} onChange = {this.ev_surname}/>

                <label>Date of Birth</label>


                <input type="date" value={this.state.birthdate} onChange={this.ev_date}/>

                <div className = "buttonc">
                <button>register</button>
                {this.state.error === 1 && <p style={{fontSize:17, color: 'red'}}>All fields are required</p>}
                {this.state.error === 2 && <p style={{fontSize:17, color: 'red'}}>Invalid email</p>}
                {this.state.error === 3 && <p style={{fontSize:17, color: 'red'}}>Password must have minimum 8 characters</p>}

                <p style={{fontSize:17, marginTop:200}}>Already a member? <NavLink to = "/" style={{textDecoration: "none"}}>Login</NavLink> </p>
                {this.state.registered && <Navigate replace to ='../registercomplete'/>}
                </div>
            </form>
        </div>
    );
    }
}

export default Register;