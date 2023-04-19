import { Component } from 'react'
import PatientPagesContent from './PatientPagesContent'
import { useEffect, useState } from 'react'
import lupa from './images/icon_lupa.png'
const getConsultationsUrl = 'http://localhost:8080/patientdata/getdoctors'
const Doctors = () => {
    const [doctorsData, setDoctorsData] = useState([])
    const[name, setName] = useState(null)
    const[specialization, setSpecialization] = useState(null)

    const renderSpecialization = (spec) => {
        if(spec == 's1')
            return 'Allergy'
        if(spec == 's2')
            return 'Dermatology'
        if(spec == 's3')
            return 'Family medicine'
        if(spec == 's4')
            return 'Neurology'
        if(spec == 's5')
            return 'Obstetrics and gynecology'
        if(spec == 's6')
            return 'Pediatrics'
        if(spec == 's7')
            return 'Psychiatry'
        if(spec == 's8')
            return 'Urology'
    }

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
    return(
        <div className='Body' onKeyDown={handleKeyDown}>
            <PatientPagesContent/>
        <div className='DATAPAGE'>
    
        {
            doctorsData === [] && <h3>No doctors</h3>
        }
        <div className='doctorsearchbar'>
            <p> Search Doctors</p>
            <input onChange = {(e) => {setdocname(e.target.value)}}></input>
            <select style={{marginLeft:20}} value={specialization} onChange = {(e) => {setdocspec(e.target.value)}}>
                    <option value="none">Specialization</option>
                    <option value="s1">Allergy and immunology</option>
                    <option value="s2">Dermatology</option>
                    <option value="s3">Family medicine</option>
                    <option value="s4">Neurology</option>
                    <option value="s5">Obstetrics and gynecology</option>
                    <option value="s6">Pediatrics</option>
                    <option value="s7">Psychiatry</option>
                    <option value="s8">Urology</option>
                </select>
            <button onClick={tryfetchdoctors}><img src={lupa} style={{width:20}}></img></button>

        </div>
        <table className='doctortable'>
            <tr>
                <th>Name</th>
                <th>Specialization</th>
            </tr>
            {
                doctorsData !== [] && doctorsData.map((ddata) =>
                <tr>
                    <td>{ddata['name']}</td>
                    <td>{renderSpecialization(ddata['specialization'])}</td>
                </tr>
                )
            }
        </table>
        </div>
        </div>
    )

}
export default Doctors