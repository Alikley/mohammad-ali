import './App.css';
import { Routes, Route, Navigate,  } from "react-router-dom";
import Layout from './components/layout/Layout'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Panel from './components/panel/Panel';
import { useContext } from 'react';
import User from './hooks/User';
import { LoginContext } from './context/LoginContext';
import Users from './hooks/Users';



function App() {
  const userLog = useContext(LoginContext)

  return (
    <div className="App">
      <Routes>
      <Route  element={<Layout  />}>
       <Route index path='/' element={<Home  />} />
       <Route index path='/login' element={
         userLog.islogin?
         <Navigate to='/panel' replace={true} />
         :
         <Login />
       } />
       <Route index path='/panel' element={
        userLog.islogin?
       <Panel  />
       
:
        <Navigate to='/login' replace={true} />

}/>
       <Route  path='/users' element={<Users />} />
       
       <Route  path='/users/:userId' element={<User />} />

      </Route>
    </Routes>
    </div>
  );
}

export default App;
