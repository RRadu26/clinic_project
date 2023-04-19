import { useEffect, useState } from "react"
import DoctorPagesContent from "./DoctorPagesContent"
import { NavLink, useParams } from "react-router-dom"
import add from './add.png'


const getpatienturl = 'http://localhost:8080/doctordata/getpatientbyid'
const ViewPatient = () => {
    const {id} = useParams()
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

    return (
        <div className='Body'>
        <DoctorPagesContent/>
            <div className='DATAPAGE'>
                {patientData != null &&
                 <div className="patientdetails">
                    <p>Name: {patientData["name"]} </p>
                    <p>Birthdate: {patientData["birthdate"]} </p>
                 
                 </div>
                }
                <div className="morepacientdata">
                    <div>
                    <NavLink to='consultations' style={{marginRight:125, textDecoration:'none'}}>Consulations</NavLink>
                    <NavLink to='newconsultation'><img src = {add}></img></NavLink>
                    </div>
                    <div style={{marginTop:30}}>
                    <NavLink to='medication' style={{marginRight:145, textDecoration:'none'}}>Medication</NavLink>
                    <NavLink to='newmedication'><img src = {add}></img></NavLink>
                    </div>
                    <div style={{marginTop:30}}>
                    <NavLink to='foodprograms' style={{marginRight:110, textDecoration:'none'}}>FoodPrograms</NavLink>
                    <NavLink to='newfoodprogram'><img src = {add}></img></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPatient