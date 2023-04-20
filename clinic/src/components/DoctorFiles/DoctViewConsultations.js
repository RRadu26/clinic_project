
import DoctorPagesContent from './DoctorPagesContent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const getConsultationsUrl = 'http://localhost:8080/doctordata/getpatientconsultation'
const getpatienturl = 'http://localhost:8080/doctordata/getpatientbyid'

const DoctViewConsultations = () => {
    const {id} = useParams()

    const [cons_data, setConsData] = useState([])
    const [patientData, setPatientData] =useState(null)

    const tryfetchpatients = async () => {
        const getdataform = {id:id}
        const response = await fetch(getpatienturl, {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
            body:JSON.stringify(getdataform)
        })
        const responseStatus = await response.json()
        setPatientData(responseStatus)
    }

    useEffect(() => {tryfetchpatients()}, [])
    const tryfetchconsultations = async () => {
        const getdataform = {id:id}
        const response = await fetch(getConsultationsUrl, {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
            body:JSON.stringify(getdataform)
        })
        const responseStatus = await response.json()
        setConsData(responseStatus)
    }

    useEffect(() => {tryfetchconsultations()}, [])
    return(
        <div className='Body'>
            <DoctorPagesContent/>
        <div className='DATAPAGE'>
            {patientData != null &&
                <div className="patientdetails">
                <p>Name: {patientData["name"]} </p>
                <p>Birthdate: {patientData["birthdate"]} </p>
                
                </div>
            }
        {
            cons_data === [] && <h3>No consultations</h3>
        }
        {
            cons_data !== [] && cons_data.map((consult) =>
            <div className='consultationbox'>
                <p>Date:  {consult['date']}</p>
                <p>Doctor:  {consult['d_name']}</p>
                <h3 style={{textAlign:'center', borderBottom:'solid 1px '}}><span>{consult['name']}</span></h3>
                <p>Observations: </p>
                <p>  {consult['c_data']}</p>
                <p>Diagnosis:</p>
                <p>  {consult['diagnosis']}</p>

            </div>
            )
        }
        </div>
        </div>
    )

}
export default DoctViewConsultations