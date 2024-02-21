import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import User from './Components/User';
import Log from './Components/Log';
import Add_CR from './Components/Add_CR';

function App() {
   return(
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/dashboard/user' element={<User />}></Route>
        <Route path='/dashboard/log' element={<Log />}></Route>
        <Route path='/dashboard/add_cr' element={<Add_CR />}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
   )


}

export default App
