
import React  from "react"
import { Navigate } from "react-router-dom"

const PatientRoute = ({children}) => {
    return sessionStorage.getItem('patient_authenticated' ? children: <Navigate to='/'/>)
}
export default PatientRoute