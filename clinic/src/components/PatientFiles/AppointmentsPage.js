import PatientPagesContent from "./PatientPagesContent"


const AppointmentsPage = () => {
    return (
        <div className='Body'>
        <PatientPagesContent/>
            <div className='DATAPAGE'>

                <h1 style={{color:'rgba(70, 102, 107, 0.8)'}}>Appointments</h1>
                <div className="requestappo">
                    <h2 style={{textAlign:"center"}}>Make Appointment</h2>
                    <form>
                        <label>Phone number</label>
                        <input></input>
                        <label>Doctor first name</label>
                        <input></input>
                        <label>Doctor surname</label>
                        <input></input>
                        <div className = "buttonc">
                        <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsPage