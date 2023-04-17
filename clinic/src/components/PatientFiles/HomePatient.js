import { useEffect } from "react"
import React from 'react'
import { useNavigate} from 'react-router-dom';
import PatientPagesContent from "./PatientPagesContent";

const getdataurl = 'http://localhost:8080/patientdata/patientdata'


const HomePatient = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!sessionStorage.getItem('patient_authenticated'))
            navigate('/')
    })
    const trylogin = async () => {

            const response = await fetch(getdataurl, {
                method:'GET',
                headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
                'Authorization': 'Bearer '+localStorage.getItem('token')},
            })
            const responseStatus = await response.text()
            console.log(responseStatus)

        }
        trylogin()

    return(
        <div className="Body">
            <PatientPagesContent/>
            <div style={{fontSize:60, color: 'blue', marginLeft:300}}>
 
            </div>
        </div>
    )


}

export default HomePatient