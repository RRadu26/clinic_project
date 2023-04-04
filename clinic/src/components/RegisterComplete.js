import React, {Component} from 'react'
import './login_style.css'
import { NavLink } from 'react-router-dom';

const RegisterComplete = () => {
        return (
            <div className='login'>
                <h2>The registration was complete!</h2>
                <img src = {require('./doctor.jpg')} style={{width:300}} />
                <NavLink to='../' style={{marginTop:100, display:'block', textDecoration:'none'}}> Press here to login</NavLink>
            </div>
        )
}

export default RegisterComplete;