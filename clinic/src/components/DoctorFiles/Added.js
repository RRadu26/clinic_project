
import { NavLink } from "react-router-dom"
import DoctorPagesContent from "./DoctorPagesContent"
const Added = () => {
    return(
        <div className='Body'>
            <DoctorPagesContent/>

            <div className='DATAPAGE'>
            <h2>Data added succesfully</h2>
            <NavLink to='..'>home</NavLink>

            </div>
        </div>
    )
}

export default Added