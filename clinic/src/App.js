import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//pages
import Register from './components/Login/Register.js';
import Login from "./components/Login/Login"
import RegisterDoctor from './components/Login/RegisterDoctor';
import Forgotpass from './components/Login/Forgotpass';
import RegisterComplete from './components/Login/RegisterComplete';
import HomePatient from './components/PatientFiles/HomePatient';
import Consulations from './components/PatientFiles/Consultations';
import FoodPrograms from './components/PatientFiles/FoodPrograms'
import Doctors from './components/PatientFiles/Doctors';
import AppointmentsPage from './components/PatientFiles/AppointmentsPage';
import ViewDoctor from './components/PatientFiles/ViewDoctor';
import HomeDoctor from './components/DoctorFiles/HomeDoctor';
import Patients from './components/DoctorFiles/Patients';
import ViewPatient from './components/DoctorFiles/ViewPatient';
import DoctorViewConsultation from './components/DoctorFiles/DoctViewConsultations'
import DoctorViewFoodPrograms from './components/DoctorFiles/DoctorViewFoodPrograms';
import AddConsultation from './components/DoctorFiles/AddConsoltation';
import AddFoodProgram from './components/DoctorFiles/AddFoodProgram';
import AddReceipt from './components/DoctorFiles/AddReceipt';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    
    <Route path='/' element= {<Login/>} />
    <Route path='register' element= {<Register/>} />
    <Route path='registerdoctor' element={<RegisterDoctor/>}/>
    <Route path='passforgot' element={<Forgotpass/>}/>
    <Route path='registercomplete' element={<RegisterComplete/>}/>
    <Route path='homepage' element={<HomePatient/>}/>
    <Route path='patientconsultations' element={<Consulations/>}/>
    <Route path='patientfoodprograms' element={<FoodPrograms/>}/>
    <Route path='patientdoctors' element={<Doctors/>}/>
    <Route path='patientappointments' element={<AppointmentsPage/>}/>
    <Route path='patientdoctors/profile/:id' element={<ViewDoctor/>}/>
    <Route path='homepagedoct' element={<HomeDoctor/>}/>
    <Route path='patientlist' element={<Patients/>}/>
    <Route path='patientlist/profile/:id' element={<ViewPatient/>}/>
    <Route path='patientlist/profile/:id/consultations' element={<DoctorViewConsultation/>}/>
    <Route path='patientlist/profile/:id/foodprograms' element={<DoctorViewFoodPrograms/>}/>

    <Route path='patientlist/profile/:id/newconsultation' element={<AddConsultation/>}/>
    <Route path='patientlist/profile/:id/newfoodprogram' element={<AddFoodProgram/>}/>
    <Route path='patientlist/profile/:id/newmedication' element={<AddReceipt/>}/>



    </Route>
  )
)
 
function App() {
    return (
      <RouterProvider router = {router}/>
    );
}

export default App;
