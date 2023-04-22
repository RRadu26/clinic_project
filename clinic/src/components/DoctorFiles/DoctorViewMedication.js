
import DoctorPagesContent from './DoctorPagesContent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const getConsultationsUrl = 'http://localhost:8080/doctordata/getpatientreceipts'
const getpatienturl = 'http://localhost:8080/doctordata/getpatientbyid'

const DoctorViewMedication = () => {
    const {id} = useParams()

    const [med_data, setMetData] = useState([])
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
        setMetData(responseStatus)
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
            med_data === [] && <h3>No consultations</h3>
        }
        {
            med_data !== [] && med_data.map((med) =>
            <div className='consultationbox'>
                <p>Date: {med["date"]}</p>
                <p>Doctor:{med["d_name"]}</p>

                <h3 style={{textAlign:'center', borderBottom:'solid 1px '}}><span>{med['name']}</span></h3>
                <table className='medicationtable'>
                <tr>
                <th>Name</th>
                <th>Specifications</th>
                {/* to={'profile/' + ddata['id'] */}
            </tr>
                {med["drugs"].map((p) => 
                    <tr>
                        <td>{p['name']}</td>
                        <td>{p['specifications']}</td>
                    </tr>
                )}
                </table>
                <p>Observations:</p>
                <p>{med['observations']}</p>

            </div>
            )
        }
        </div>
        </div>
    )

}
export default DoctorViewMedication