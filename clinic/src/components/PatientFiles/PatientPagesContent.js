import { NavLink } from 'react-router-dom'
import './patientPages_style.css'
import logo from '../../Logo.png'
import i_phone from './icon_phone.png'
import i_email from './icon_email.png'
import i_logout from  './icon_logout.png'
import { useEffect } from 'react'

const PatientPagesContent = () => {
    const getname = () => {

    }
    useEffect(() => {getname()})

    return(
        <div className="Body">

            <div className="Menu">
                <p className='mtext'><NavLink to = "/register" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Appointments</NavLink></p>
                <p className='mtext'><NavLink to = "/register" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Doctors</NavLink></p>
                <p className='mtext'><NavLink to = "/register" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Consulations</NavLink></p>
                <p className='mtext'><NavLink to = "/register" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Food Programs</NavLink></p>
            </div>
            <div className='TopBar'>
                <img src={logo} alt='nu' style={{ width:80, paddingLeft:40}}/>
                <img src={i_phone} alt='nu' style={{ width:80, paddingLeft:40}}/>
                <div className='ttext'> +40729999999</div>
                <img src={i_email} alt='nu' style={{ width:50, paddingLeft:40}}/>
                <div className='ttext'> contact@demonstrativeclinic</div>
                <img src={i_logout} alt='nu' style={{ width:50, paddingLeft:40}}/>

                </div>
        </div>
    )
}
export default PatientPagesContent 