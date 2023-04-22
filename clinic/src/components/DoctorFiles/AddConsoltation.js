import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DoctorPagesContent from './DoctorPagesContent'
const getConsultationsUrl = 'http://localhost:8080/doctordata/addconsultation'
const getDataUrl = 'http://localhost:8080/patientdata/mydata'


const AddConsultation = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [diagnosis, setdiagnosis] = useState('');
    const {id} = useParams();
    const [doc_id, setDocId] = useState(null);
    const [error, setError] = useState(false)

    const valid = () => {
        if(date == '')
            return false
        if(name == '')
            return false
        if(data == '')
            return false
        if(doc_id == null)
            return false
        if(diagnosis == '')
            return false
        return true
    }

    const trylogin = async () => {

        const response = await fetch(getDataUrl, {
            method:'GET',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
        })
        const responseStatus = await response.json()
        setDocId(responseStatus['id'])
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();
        if(valid()) {
        setError(false)
        const consultation = {name:name, c_data:data, diagnosis:diagnosis, date:date, patient_id:id, doc_id:doc_id}
        const response = await fetch(getConsultationsUrl, {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
            body:JSON.stringify(consultation)
        })
        const responseStatus = await response.text()
        console.log(responseStatus)
        if(responseStatus == 'Saved')
            navigate('../../../homedoct/added')
        } else {
            setError(true)
        }
    }
    useEffect(() => {trylogin()}, [])
    return(
        <div className='Body'>
            <DoctorPagesContent/>
            <div className='DATAPAGE'>
                <div className="consappo">
                        <h2 style={{textAlign:"center"}}>Add Consulations</h2>
                        <form onSubmit={HandleSubmit}>
                            <label>Date</label>
                            <input value={date} type="date" onChange={(e) => setDate(e.target.value)}></input>
                            <label>Consulation name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                            <label>Observations</label>
                            <textarea style={{resize:"none",width:'80%', height:150}} value={data} onChange={(e) => setData(e.target.value)}></textarea>
                            <label>Diagnosis</label>
                            <textarea style={{resize:"none",width:'80%', height:75}} value={diagnosis} onChange={(e) => setdiagnosis(e.target.value)}></textarea>
                            <div className = "buttonc">
                            <button>Send</button>
                            {error == true && <p style={{color:'red'}}>All fields required</p>}

                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )

}
export default AddConsultation