import PatientPagesContent from "./PatientPagesContent"
import { useParams } from "react-router-dom"

const ViewDoctor = () => {
    const {id} = useParams()

    return (
        <div className='Body'>
        <PatientPagesContent/>
            <div className='DATAPAGE'>
                <h1>{id}</h1>
            </div>
        </div>
    )
}

export default ViewDoctor