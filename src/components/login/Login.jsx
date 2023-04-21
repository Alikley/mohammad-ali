import  { useState } from 'react'
import axios from '../../api/axios'
import './Login.scss'
import { useAuth } from '../../hooks/use'
function Login({islogin,setIslogin}) {
    const [error, setError] = useState(false)
    const { setAuth } = useAuth();
    const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dG9yYWJpIiwiZXhwIjoxNjgyMDc5NjA1fQ.K1CXL48JWbs0TT1qcicwo38Imcyqo9xGtF7MOYDj398";
    const handleSumbit = (e) =>{
        e.preventDefault()
        try{
        const username=e.target.username.value
        const password=e.target.password.value
        if (username==="moha"&&password==="123456") {
            setError(false)
            setIslogin(true)
            setAuth(token)
        }else{
            setError("Invalid username or password")
        }
        axios
        .post('https://api.pm.kaaryar.ir/login.auth', {
        username: this.state.userName,
        password: this.state.userPassword
         })
        .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log(response.data);
        })
        .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        });
      
        }catch{}


        
        // const username=e.target.username.value
        // const password=e.target.password.value
        // if (username==="moha"&&password==="123456") {
        //     setError(false)
        //     setIslogin(true)
        // }else{
        //     setError("Invalid username or password")
        // }

    }
  return (

            <div className='login'>
            <h1>
                Login
            </h1>
            <form onSubmit={handleSumbit} className="log">
                {error &&<div className='error'>{error}</div>}
                <div>
                    <label htmlFor="username">Username :</label>
                    <input id='username' name='username' className='inp' type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input id='password' name='password' className='inp' type="password" />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            </div>
  )
}

export default Login