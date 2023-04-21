import './App.css';
import { Routes, Route, Navigate,  } from "react-router-dom";
import Layout from './components/layout/Layout'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Panel from './components/panel/Panel';
import { useState } from 'react';



function App() {
  const [islogin, setIslogin] = useState(false)

  return (
    <div className="App">
      <Routes>
      <Route  element={<Layout islogin={islogin} />}>
       <Route index path='/' element={<Home />} />
       <Route index path='/login' element={
         islogin?
         <Navigate to='/panel' replace={true} />
         :
         <Login islogin={islogin} setIslogin={setIslogin}/>
       } />
       <Route index path='/panel' element={
        islogin?
       <Panel islogin={islogin} logout={() =>setIslogin(false)}/>
       
:
        <Navigate to='/login' replace={true} />

}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
