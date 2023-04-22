
import PatientPageContent from './PatientPagesContent'
import { useEffect, useState } from 'react'
const getConsultationsUrl = 'http://localhost:8080/patientdata/myreceipts'

const Medication = () => {
    const [med_data, setMetData] = useState([])


    const tryfetchconsultations = async () => {
        const response = await fetch(getConsultationsUrl, {
            method:'GET',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
        })
        const responseStatus = await response.json()
        setMetData(responseStatus)
    }

    useEffect(() => {tryfetchconsultations()}, [])
    return(
        <div className='Body'>
            <PatientPageContent/>
        <div className='DATAPAGE'>
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
export default Medication