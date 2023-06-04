import  {  useState,useEffect, useContext } from 'react'
import axios from 'axios'
import './Login.scss'
import { useAuth } from '../../context/Roless'
import { LoginContext } from '../../context/LoginContext'
import  Cookies from 'js-cookie'
function Login() {

    const userLog = useContext(LoginContext)
    const [error, setError] = useState(false)
    const {setFirst } = useAuth();
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')


    useEffect(() => {
        setError('');
      
      }, [user,pwd])
      
      const haandlesubmit = async (e) =>{
          e.preventDefault();
          userLog.login()
          setUser('');
          setPwd('');
          
          try{
            
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded" 
               }
               
               let bodyContent = `username=${user}&password=${pwd}`;               
               let reqOptions = {
                 url: "https://kaaryar.hossein.codes/oauth2/token",
                 method: "POST",
                 headers: headersList,  
                 data: bodyContent,
               }
               
               let response = await axios.request(reqOptions);
               console.log(response.data);

               if(response.data&& response.data.access_token){
                Cookies.set('authorization', `${response.data.access_token}`)
                JSON.parse(localStorage.getItem(setFirst(response.data.profile)))
        

                // localStorage.setItem('authorization , roles' ,JSON.stringify(`UserName:${response.data.profile.username},UseRoles:${response.data.profile.roles}`))
                // setAuth(response.data)
                console.log(response);
                console.log(reqOptions);
                
               }

                }catch (error) {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                    } else if (error.request) {
                    console.log("network error");
                    } else {
                    console.log(error);
                    }
                }
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
                    <input id='username' name='username' className='inp' onChange={(e) => setUser(e.target.value)} type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input id='password' name='password' className='inp' onChange={(e) => setPwd(e.target.value)} type="password"/>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            </div>
  )
}

export default Login












// } catch (error) {
//   if (error.response) {
//       console.log(error.response);
//       console.log("server responded");
//     } else if (error.request) {
//       console.log("network error");
//     } else {
//       console.log(error);
//     }
// }
