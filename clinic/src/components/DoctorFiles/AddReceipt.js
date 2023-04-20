import { useEffect, useState } from 'react'
import lupa from '../PatientFiles/images/icon_lupa.png'
import { NavLink } from 'react-router-dom'
import DoctorPagesContent from './DoctorPagesContent'
const getConsultationsUrl = 'http://localhost:8080/doctordata/getpatients'

const AddReceipt = () => {



    return(
        <div className='Body'>
            <DoctorPagesContent/>
            <div className='DATAPAGE'>
                <p>AddConsultation</p>

            </div>
        </div>
    )

}
export default AddReceipt