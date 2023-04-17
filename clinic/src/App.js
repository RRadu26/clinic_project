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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    <Route path='/' element= {<Login/>} />
    <Route path='register' element= {<Register/>} />
    <Route path='registerdoctor' element={<RegisterDoctor/>}/>
    <Route path='passforgot' element={<Forgotpass/>}/>
    <Route path='registercomplete' element={<RegisterComplete/>}/>

    <Route path='homepage' element={<HomePatient/>}/>


    </Route>
  )
)
 
function App() {
    return (
      <RouterProvider router = {router}/>
    );
}

export default App;
