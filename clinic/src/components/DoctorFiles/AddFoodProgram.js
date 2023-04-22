import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DoctorPagesContent from './DoctorPagesContent'
import { useNavigate } from 'react-router-dom'
const getFoodProgramsUrl = 'http://localhost:8080/doctordata/addfoodprogram'
const getDataUrl = 'http://localhost:8080/patientdata/mydata'

const AddFoodProgram = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const {id} = useParams();
    const [doc_id, setDocId] = useState(null);
    const [error, setError] = useState(false)

    const trylogin = async () => {

        const response = await fetch(getDataUrl, {
            method:'GET',
            headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer '+localStorage.getItem('token')},
        })
        const responseStatus = await response.json()
        setDocId(responseStatus['id'])
    }

    const valid = () => {
        if(date == '')
            return false
        if(name == '')
            return false
        if(data == '')
            return false
        if(doc_id == null)
            return false
        return true
    }
    const HandleSubmit = async (event) => {
        event.preventDefault();
        if(valid()) {
            setError(false)
            try {
                const foodprogram = {name:name, data:data, date:date, p_code:id, d_code:doc_id}
                const response = await fetch(getFoodProgramsUrl, {
                    method:'POST',
                    headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
                    'Authorization': 'Bearer '+localStorage.getItem('token')},
                    body:JSON.stringify(foodprogram)
                })
                const responseStatus = await response.text()
                if(responseStatus =='Saved')
                    navigate('../../../homedoct/added')
            } catch(error) {
                console.log('Bad request')
            }
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
                        <h2 style={{textAlign:"center"}}>Add Food Program</h2>
                        <form onSubmit={HandleSubmit}>
                            <label>Date</label>
                            <input value={date} type="date" onChange={(e) => setDate(e.target.value)}></input>
                            <label>Food Program name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                            <label>Details</label>
                            <textarea style={{resize:"none",width:'80%', height:150}} value={data} onChange={(e) => setData(e.target.value)}></textarea>
=                            <div className = "buttonc">
                            <button>Send</button>
                            {error == true && <p style={{color:'red'}}>All fields required</p>}
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )

}
export default AddFoodProgram