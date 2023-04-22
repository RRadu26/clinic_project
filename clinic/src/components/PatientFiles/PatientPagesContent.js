import { NavLink, useNavigate } from 'react-router-dom'
import './patientPages_style.css'
import logo from '../../Logo.png'
import i_phone from './images/icon_phone.png'
import i_email from './images/icon_email.png'
import i_logout from  './images/icon_logout.png'
import i_user from './images/icon_user.png'
import { useEffect, useMemo, useState } from 'react'
const getDataUrl = 'http://localhost:8080/patientdata/mydata'

const PatientPagesContent = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('') 
    useEffect(() => {
        if(!sessionStorage.getItem('patient_authenticated'))
            navigate('/')
    })
    const trylogin = async () => {

            const response = await fetch(getDataUrl, {
                method:'GET',
                headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
                'Authorization': 'Bearer '+localStorage.getItem('token')},
            })
            const responseStatus = await response.json()
            setUsername(responseStatus['surname'] + ' ' + responseStatus['first_name'])
            console.log(responseStatus['id'])
        }
    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/')
    }
    useEffect(() => {trylogin()}, [])

    return(
        <div className="Body">

            <div className="Menu">
                <p className='mtext'><NavLink to = "/homepage" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Home</NavLink></p>
                <p className='mtext'><NavLink to = "/patientappointments" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Appointments</NavLink></p>
                <p className='mtext'><NavLink to = "/patientdoctors" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Doctors</NavLink></p>
                <p className='mtext'><NavLink to = "/patientconsultations" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Consulations</NavLink></p>
                <p className='mtext'><NavLink to = "/patientmedication" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Medication</NavLink></p>
                <p className='mtext'><NavLink to = "/patientfoodprograms" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Food Programs</NavLink></p>
            </div>
            <div className='TopBar'>
                <img src={logo} alt='nu' style={{ width:80, paddingLeft:40}}/>
                <img src={i_phone} alt='nu' style={{ width:80, paddingLeft:40}}/>
                <div className='ttext'> +40729999999</div>
                <img src={i_email} alt='nu' style={{ width:50, paddingLeft:40}}/>
                <div className='ttext'> contact@demonstrativeclinic</div>
                <img className='left'src={i_user} alt='nu' style={{ width:50}}/>

                <div className='ttext'>{username}</div>

                <button onClick={logout}><img src={i_logout} alt='nu' style={{ width:50,}}/></button>
                </div>
        </div>
    )
}
export default PatientPagesContent 