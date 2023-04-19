import { NavLink, useNavigate } from 'react-router-dom'
import '../PatientFiles/patientPages_style.css'
import logo from '../../Logo.png'
import i_phone from '../PatientFiles/images/icon_phone.png'
import i_email from '../PatientFiles/images/icon_email.png'
import i_logout from  '../PatientFiles/images/icon_logout.png'
import i_user from '../PatientFiles/images/icon_user.png'
import { useEffect, useMemo, useState } from 'react'
const getDataUrl = 'http://localhost:8080/patientdata/mydata'

const DoctorPagesContent = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('') 
    useEffect(() => {
        if(!sessionStorage.getItem('doctor_authenticated'))
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
                <p className='mtext'><NavLink to = "/homepagedoct" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Home</NavLink></p>
                <p className='mtext'><NavLink to = "/patientlist" style={{textDecoration: "none", color:'rgb(237, 243, 243)', marginLeft:20}}>Patients</NavLink></p>

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
export default DoctorPagesContent 