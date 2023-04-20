
import DoctorPagesContent from './DoctorPagesContent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const getFoodProgramsUrl = 'http://localhost:8080/doctordata/getpatientfoodprogram'
const getpatienturl = 'http://localhost:8080/doctordata/getpatientbyid'

const DcotorViewFoodPrograms = () => {
    const {id} = useParams()

    const [food_data, setFoodData] = useState([])
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
        const response = await fetch(getFoodProgramsUrl, {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
            body:JSON.stringify(getdataform)
        })
        const responseStatus = await response.json()
        setFoodData(responseStatus)
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
            food_data === [] && <h3>No food programs</h3>
        }
        {
            food_data !== [] && food_data.map((food) =>
            <div className='consultationbox'>
                <p>Date:  {food['date']}</p>
                <p>Doctor:  {food['d_name']}</p>
                <h3 style={{textAlign:'center', borderBottom:'solid 1px '}}><span>{food['name']}</span></h3>
                <p>{food['data']}</p>
            </div>
            )
        }
        </div>
        </div>
    )

}
export default DcotorViewFoodPrograms