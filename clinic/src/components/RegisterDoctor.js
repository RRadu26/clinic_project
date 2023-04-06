import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './register_style.css'
import { sha3_256 } from 'js-sha3';

const RegisterDoctor = () => {

    const Navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [error, setError] = useState(0)
    const [education, setEducation] = useState('')
    const [specialization, setSpecialization] = useState('s1')
    const [doccode, setDoccode] = useState('')
    const url = "http://localhost:8080/register/adddoctor"


    const validate_input = () => {
        if(email.length === 0 || password.length === 0
            || firstname.length === 0 || surname === 0
            || birthdate === '' || specialization.length === 0
            || doccode.length === 0) {
            setError(1)
            return false
        }
        if(!(email.endsWith('@gmail.com') || email.endsWith('@yahoo.com'))) {
            setError(2)
            return false;
        }
        if(password.length < 8) {
            setError(3)
            return false;
        }
        if(doccode.length !== 12) {
            setError(4)
            return false;
        }
        setError(0)
        return true;
    }

    const HandleSubmit = async (event) =>{
        event.preventDefault();
        let valid = validate_input();
        let passkey = sha3_256(password);
        if(valid) {
            const credentials = {email:email, password:passkey, 
                first_name:firstname, surname:surname,
                birthdate:birthdate, education:education,
                specialization:specialization, doccode:doccode}
                const response = await fetch(url, {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(credentials)
                })
                const responseStatus = await response.text()
                if(responseStatus === 'UserExists')
                    setError(5)
                else if(responseStatus === 'BadDoccode')
                    setError(6)
                else
                Navigate('../registercomplete')
        }
        setPassword('')

    }

    return (
        <div className= "registerdoctor">
            <p style={{fontSize: 35,paddingTop: 30}}>Register</p>
            <div className='topbuttonsheader'>
            <NavLink className='topbuttons' to = "../register">Patient<></></NavLink><label className='current'>Doctor</label>
            </div>
            <form onSubmit={HandleSubmit}>

                <label >Email</label>
                <input type = "text" placeholder='type your email' value = {email} onChange = { (e) => setEmail(e.target.value)}/>

                <label >Password</label>
                <input type = "password" placeholder='type your password' value = {password} onChange = {(e) => {setPassword(e.target.value)}}/>

                <label >First Name</label>
                <input type = "text" placeholder='type your first name' value = {firstname} onChange = {(e) => {setFirstname(e.target.value)}}/>

                <label >Surname</label>
                <input type = "text" placeholder='type your surname' value = {surname} onChange = {(e) => {setSurname(e.target.value)}}/>


                <label >Education</label>
                <input type = "text" placeholder='type your education' value = {education} onChange = {(e) => {setEducation(e.target.value)}}/>

                <label >Specialization</label>
                <select value={specialization} onChange = {(e) => {setSpecialization(e.target.value)}}>
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
                <input type = "text" placeholder='type your doctor code' value = {doccode} onChange = {(e) => {setDoccode(e.target.value)}}/>

                <label>Date of Birth</label>
                <input type="date" value={birthdate} onChange= {(e) => {setBirthdate(e.target.value)}}/>

                <div className = "buttonc">

                <button>register</button>
                {error === 1 && <p style={{fontSize:17, color: 'red'}}>All fields are required</p>}
                {error === 2 && <p style={{fontSize:17, color: 'red'}}>Invalid email</p>}
                {error === 3 && <p style={{fontSize:17, color: 'red'}}>Password must have minimum 8 characters</p>}
                {error === 4 && <p style={{fontSize:17, color: 'red'}}>Doctor code must have 12 characters</p>}
                {error === 5 && <p style={{fontSize:17, color: 'red'}}>Account already exists</p>}
                {error === 6 && <p style={{fontSize:17, color: 'red'}}>Invalid doccode</p>}

                <p style={{fontSize:17, marginTop:200}}>Already a member? <NavLink to = "/" style={{textDecoration: "none"}}>Login</NavLink> </p>

                </div>
            </form>
        </div>
    );
}

export default RegisterDoctor;