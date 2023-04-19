import { useEffect, useState } from 'react'
import lupa from '../PatientFiles/images/icon_lupa.png'
import { NavLink } from 'react-router-dom'
import DoctorPagesContent from './DoctorPagesContent'
const getConsultationsUrl = 'http://localhost:8080/patientdata/getdoctors'

const Patients = () => {
    const [doctorsData, setDoctorsData] = useState([])
    const[name, setName] = useState(null)
    const[specialization, setSpecialization] = useState(null)


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          tryfetchdoctors()
        }
    }
    const setdocname = (name) => {
    setName(name)
    if(name == '')
        setName(null)
    }

    const setdocspec = (spec) => {
        setSpecialization(spec)
        if(spec == 'none') {
            setSpecialization(null)
        }
    }
    

    const tryfetchdoctors = async () => {
        const getdataform = {name:name, specialization:specialization}
        const response = await fetch(getConsultationsUrl, {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
            body:JSON.stringify(getdataform)
        })
        const responseStatus = await response.json()
        setDoctorsData(responseStatus)
    }

    useEffect(() => {tryfetchdoctors()}, [])
    const onRowClick = () => {
        
    }
    return(
        <div className='Body' onKeyDown={handleKeyDown}>
            <DoctorPagesContent/>
        <div className='DATAPAGE'>
    
        {
            doctorsData === [] && <h3>No doctors</h3>
        }
        <div className='doctorsearchbar'>
            <p> Search Patients</p>
            <input placeholder='doctor name' onChange = {(e) => {setdocname(e.target.value)}}></input>
            <button onClick={tryfetchdoctors}><img src={lupa} style={{width:20}}></img></button>

        </div>
        <table className='doctortable'>
            <tr>
                <th>First Name  | Surname</th>
                <th>Specialization</th>
                {/* to={'profile/' + ddata['id'] */}
            </tr>
            {/* {
                doctorsData !== [] && doctorsData.map((ddata) =>
                    <tr>
                        <td><NavLink style={{textDecoration:"none", display:'static'}} to={'profile/' + ddata['id']}>{ddata['name']}</NavLink></td>
                        <td>{renderSpecialization(ddata['specialization'])}</td>
                    </tr>
                )
            } */}
        </table>
        </div>
        </div>
    )

}
export default Patients