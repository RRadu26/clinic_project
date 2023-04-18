import PatientPagesContent from './PatientPagesContent'
import { useEffect, useState } from 'react'
const getConsultationsUrl = 'http://localhost:8080/patientdata/myfoodprograms'

const FoodPrograms = () => {
    const [food_data, setFoodData] = useState([])

    const tryfetchfoodprograms = async () => {

        const response = await fetch(getConsultationsUrl, {
            method:'GET',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
        })
        const responseStatus = await response.json()
        setFoodData(responseStatus)


    }

    useEffect(() => {tryfetchfoodprograms()}, [])
    return(
        <div className='Body'>
            <PatientPagesContent/>
        <div className='DATAPAGE'>
        <h1 style={{color:'rgba(70, 102, 107, 0.8)'}}>Food Programs</h1>

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
export default FoodPrograms