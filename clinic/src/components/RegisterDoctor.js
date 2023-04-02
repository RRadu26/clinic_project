import React from 'react'
import { NavLink } from 'react-router-dom';
import './register_style.css'

class RegisterDoctor extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstname: '',
            surname: '',
            birthdate: '',
            specialization: 's1',
            education: '',
            doccode: ''
        }
    }
    validate_input = () => {
        if(this.state.email.length === 0 || this.state.password.length === 0
            || this.state.firstname.length === 0 || this.state.surname === 0
            || this.state.birthdate === '' || this.state.specialization.length === 0
            || this.state.doccode.length === 0) {
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
        if(this.state.doccode.length !== 12) {
            this.setState({error:4})
            return false;
        }
        this.setState({error:0})
        return true;
    }

    submit_register = (event) =>{
        event.preventDefault();
        let valid = this.validate_input();
        if(valid)
            console.log(this.state.email + " " + this.state.password + " " + this.state.firstname + " " + this.state.surname + " " + this.state.birthdate + " " + this.state.education + " " + this.state.doccode + " " + this.state.specialization);
        this.setState({email : ''});
        this.setState({password: ''});
        this.setState({firstname: ''});
        this.setState({surname: ''});
        this.setState({birthdate: ''});
        this.setState({education: ''});
        this.setState({doccode: ''});
        this.setState({specialization: 's1'});
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
    ev_education = (event) => {
        this.setState({education : event.target.value});
    }
    ev_doccode = (event) => {
        this.setState({doccode : event.target.value});
    }
    ev_specialization = (event) => {
        this.setState({specialization : event.target.value});
    }

    render() {
    return (
        <div className= "registerdoctor">
            <p style={{fontSize: 35,paddingTop: 30}}>Register</p>
            <div className='topbuttonsheader'>
            <NavLink className='topbuttons' to = "../register">Patient<></></NavLink><label className='current'>Doctor</label>
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

                <label >Education</label>

                <input type = "text" placeholder='type your education' value = {this.state.education} onChange = {this.ev_education}/>

                <label >Specialization</label>

                <select value={this.state.specialization} onChange = {this.ev_specialization}>
                <option value="s1">Allergy and immunology</option>
                <option value="s2">Dermatology</option>
                <option value="s3">Family medicine</option>
                <option value="s4">Neurology</option>
                <option value="s5">Obstetrics and gynecology</option>
                <option value="s6">Pediatrics</option>
                <option value="s7">Psychiatry</option>
                <option value="s8">Urology</option>

                </select>
                
                <label >Doctor Code</label>

                <input type = "text" placeholder='type your doctor code' value = {this.state.doccode} onChange = {this.ev_doccode}/>

                <label>Date of Birth</label>

                <input type="date" value={this.state.birthdate} onChange={this.ev_date}/>

                <div className = "buttonc">
                <button>register</button>
                {this.state.error === 1 && <p style={{fontSize:17, color: 'red'}}>All fields are required</p>}
                {this.state.error === 2 && <p style={{fontSize:17, color: 'red'}}>Invalid email</p>}
                {this.state.error === 3 && <p style={{fontSize:17, color: 'red'}}>Password must have minimum 8 characters</p>}
                {this.state.error === 4 && <p style={{fontSize:17, color: 'red'}}>Doctor code must have 12 characters</p>}

                <p style={{fontSize:17, marginTop:200}}>Already a member? <NavLink to = "/" style={{textDecoration: "none"}}>Login</NavLink> </p>

                </div>
            </form>
        </div>
    );
    }
}

export default RegisterDoctor;