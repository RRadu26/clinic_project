import { useEffect, useState } from 'react'
import lupa from '../PatientFiles/images/icon_lupa.png'
import { NavLink } from 'react-router-dom'
import DoctorPagesContent from './DoctorPagesContent'
const getConsultationsUrl = 'http://localhost:8080/doctordata/getpatients'

const Patients = () => {
    const [doctorsData, setDoctorsData] = useState([])
    const[name, setName] = useState(null)


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            tryfetchpatients()
        }
    }
    const setpacname = (name) => {
    setName(name)
    if(name == '')
        setName(null)
    }
    

    const tryfetchpatients = async () => {
        const getdataform = {name:name}
        const response = await fetch(getConsultationsUrl, {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
            body:JSON.stringify(getdataform)
        })
        const responseStatus = await response.json()
        setDoctorsData(responseStatus)
    }

    useEffect(() => {tryfetchpatients()}, [])

    return(
        <div className='Body' onKeyDown={handleKeyDown}>
            <DoctorPagesContent/>
        <div className='DATAPAGE'>
    
        {
            doctorsData === [] && <h3>No doctors</h3>
        }
        <div className='doctorsearchbar'>
            <p> Search Patients</p>
            <input placeholder='patient name' onChange = {(e) => {setpacname(e.target.value)}}></input>
            <button onClick={tryfetchpatients}><img src={lupa} style={{width:20}}></img></button>

        </div>
        <table className='doctortable'>
            <tr>
                <th>First Name  | Surname</th>
                <th>Birthdate</th>
                {/* to={'profile/' + ddata['id'] */}
            </tr>
            {
                doctorsData !== [] && doctorsData.map((ddata) =>
                    <tr>
                        <td><NavLink style={{textDecoration:"none", display:'static'}} to={'profile/' + ddata['id']}>{ddata['name']}</NavLink></td>
                        <td>{ddata['birthdate']}</td>
                    </tr>
                )
            }
        </table>
        </div>
        </div>
    )

}
export default Patients