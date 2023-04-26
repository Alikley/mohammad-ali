import  {  useState,useEffect } from 'react'
import axios from 'axios'
import './Login.scss'
import { useAuth } from '../../hooks/use'
function Login({setIslogin}) {

    const [error, setError] = useState(false)
    const { setAuth } = useAuth();
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')


    useEffect(() => {
        setError('');
      
      }, [user,pwd])
    

      const haandlesubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post("https://kaaryar.hossein.codes/oauth2/token",
            JSON.stringify({user,pwd}),
            {
                headers:{'Content-Type':'application/json'},
                withCredentials:true
            })
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user,pwd,roles,accessToken})
            setUser('');
            setPwd('');
            setIslogin(true)
            setUser(e.target.value)
            setPwd(e.target.value)

        }catch{}
      }
       
  return (

            <div className='login'>
            <h1>
                Login
            </h1>
            <form onSubmit={haandlesubmit} className="log">
                {error &&<div className='error'>{error}</div>}
                <div>
                    <label htmlFor="username">Username :</label>
                    <input id='username' name='username' className='inp' type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input id='password' name='password' className='inp' type="password"/>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            </div>
  )
}

export default Login
