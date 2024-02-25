import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import User from './Components/User';
import Log from './Components/Log';
import Add_CR from './Components/Add_CR';
import Add_User from './Components/Add_User';
import Edit_User from './Components/Edit_User';
import Start from './Components/Start';
import User_Login from './Components/User_Login';
import User_Detail from './Components/UserDetail';

function App() {
   return(
    <BrowserRouter>
    <Routes>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/userlogin' element={<User_Login />}></Route>
      <Route path='/user_detail/:id' element={<User_Detail />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/dashboard/user' element={<User />}></Route>
        <Route path='/dashboard/log' element={<Log />}></Route>
        <Route path='/dashboard/add_cr' element={<Add_CR />}></Route>
        <Route path='/dashboard/add_user' element={<Add_User />}></Route>
        <Route path='/dashboard/edit_user/:id' element={<Edit_User />}></Route>

      </Route>

    </Routes>
    </BrowserRouter>
   )


}

export default App
