
import PatientPagesContent from './PatientPagesContent'
import { useEffect, useState } from 'react'
const getConsultationsUrl = 'http://localhost:8080/patientdata/myconsultations'

const Consulations = () => {
    const [cons_data, setConsData] = useState([])

    const tryfetchconsultations = async () => {

        const response = await fetch(getConsultationsUrl, {
            method:'GET',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
        })
        const responseStatus = await response.json()
        setConsData(responseStatus)
    }

    useEffect(() => {tryfetchconsultations()}, [])
    return(
        <div className='Body'>
            <PatientPagesContent/>
        <div className='DATAPAGE'>
        <h1 style={{color:'rgba(70, 102, 107, 0.8)'}}>Consultations</h1>

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
export default Consulations