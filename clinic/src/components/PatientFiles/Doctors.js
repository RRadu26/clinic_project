import { render } from '@testing-library/react'
import PatientPagesContent from './PatientPagesContent'
import { useEffect, useState } from 'react'
const getConsultationsUrl = 'http://localhost:8080/patientdata/getdoctors'

const Doctors = () => {
    const [doctorsData, setDoctorsData] = useState([])


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
    const tryfetchdoctors = async () => {

        const response = await fetch(getConsultationsUrl, {
            method:'GET',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
        })
        const responseStatus = await response.json()
        setDoctorsData(responseStatus)
    }

    useEffect(() => {tryfetchdoctors()}, [])
    return(
        <div className='Body'>
            <PatientPagesContent/>
        <div className='DATAPAGE'>

        {
            doctorsData === [] && <h3>No doctors</h3>
        }
        <div style={{marginTop:100}}>
            <p style={{marginBottom:5, fontSize:17}}> Search Doctors</p>
        <input style={{marginTop:0, width:'50%', height:22, fontSize:20, maxWidth:500}}></input>
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