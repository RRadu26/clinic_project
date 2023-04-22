import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DoctorPagesContent from './DoctorPagesContent'
import add from './add.png'
import remove from './remove.png'
const getMedicationURL = 'http://localhost:8080/doctordata/savemedication'
const getDataUrl = 'http://localhost:8080/patientdata/mydata'

const AddReceipt = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState('');
    const [namer, setName] = useState('');
    const [observations, setObservations] = useState('');
    const [constdrug, setConstdrug] = useState([]);
    const {id} = useParams();
    const [doc_id, setDocId] = useState(null);

    const [error, setError] = useState(false)

    const valid = (l) => {
        if(date == '')
            return false
        if(namer == '')
            return false  
        if(observations == '')
            return false
        for(let e = 0; e < l.length ; e++) {
            if(l[e]['name'] == '')
                return false
            if(l[e]['specifications'] == '')
                return false
        }
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

    const HandleSubmit = async () => {
        let l =constdrug.filter((drug) => {
            if(drug['deleted'] == true)
                return false
            else
                return true
            }).map((drug) => {
                    return {name:drug['name'], specifications:drug['specifications']}
                }
            )           
        if(valid(l)) {
            setError(false)

            try {
                const receipt = {d_code:doc_id, p_code:id, date:date, name:namer, observations:observations, drugs:l}
                const response = await fetch(getMedicationURL, {
                    method:'POST',
                    headers:{'Content-Type':'application/json', 'Access-Control-Allow-Origin': "*",
                    'Authorization': 'Bearer '+localStorage.getItem('token')},
                    body:JSON.stringify(receipt)
                })
                const responseStatus = await response.text()
                if(responseStatus == 'Saved')
                    navigate('../../../homedoct/added')

            } catch(error) {
                console.log('Bad request')
            }
        } else {
            setError(true)
        }
    }
    useEffect(() => {trylogin()}, [])

    const AddDrug  = () => {

        let list = [...constdrug]
        let len = list.length
        list.push({name:'', specifications:'', id:len, deleted:false})
        setConstdrug(list)   
    }
    const changeDrugName = (e, id) => {
        let list = [...constdrug]
        list[id]['name'] = e
        setConstdrug(list)   
    }
    const changeSpecification = (e, id) => {
        let list = [...constdrug]
        list[id]['specifications'] = e
        setConstdrug(list)
    }
    const deleteDrug = (id) => {
        let list = [...constdrug]
        list[id]['deleted'] = true
        setConstdrug(list)
    }
    useEffect(() => {}, [constdrug])
    return(
        <div className='Body'>
            <DoctorPagesContent/>
            <div className='DATAPAGE'>
                <div className="consappo" style={{width: '80%',maxWidth:600}}>
                            <h2 style={{textAlign:"center"}}>Add Medication</h2>
                                <label>Date</label>
                                <input value={date} type="date" onChange={(e) => setDate(e.target.value)}></input>
                                <label>Receipt name</label>
                                <input type="text" value={namer} onChange={(e) => setName(e.target.value)} ></input>
                                <label>Observations</label>
                                <input type="text" value={observations} onChange={(e) => setObservations(e.target.value)} ></input>
                                
                                <table className='medicationtable'>
                                    <colgroup>
                                        <col span="1" style={{width:"45%"}}></col> 
                                        <col span="1" style={{width:"45%"}}></col> 
                                        <col span="1" style={{width:"10%" }}></col> 

                                    </colgroup>
                                    <tr>
                                        <th>Name</th>
                                        <th>Specifications</th>
                                    </tr>
                                    {constdrug.map((p) => {
                                        return (
                                            p["deleted"] == false &&
                                            <tr>
                                                <td><input style={{width:'100%', fontSize:23}} value={p['name']} type='text' onChange={(e) => changeDrugName(e.target.value, p['id'])}></input></td>
                                                <td><textarea style={{resize:'none',height:100,width:'100%', fontSize:20}} value={p['specification']} type='text' onChange={(e) => changeSpecification(e.target.value, p['id'])}></textarea></td>
                                                <td style={{backgroundColor:"transparent", border:0}}><button style={{margin:'auto', border:0, backgroundColor:'transparent'}} onClick={() =>deleteDrug(p['id'])}><img style={{width:20, border:0}} src={remove}></img></button></td>
                                            </tr>
                                        )
                                    }
                                    )}
                                </table>
                                <div className = "buttona">

                                <button style={{border:0}} onClick={AddDrug}><img style={{width:50}} src={add}></img></button>

                                </div>

                                <div className = "buttonc">
                                
                                <button onClick={HandleSubmit}>Send</button>
                                {error == true && <p style={{color:'red'}}>All fields required</p>}
                                </div>
                        </div>
            </div>
        </div>
    )

}
export default AddReceipt