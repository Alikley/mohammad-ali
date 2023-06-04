import  { useEffect, useState } from 'react'
import axios from 'axios';
import  Cookies  from 'js-cookie';
import './Users.scss'
import { Link,useNavigate } from 'react-router-dom';
function Users() {
    const [userlist,setUesrlist] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const navigate = useNavigate();

    
    // const authorization= JSON.parse(Co.getItem('authorization'))

    
    useEffect(() =>{
        const authorization = Cookies.get("authorization")
        const fetchUserList = async () => {
            setLoading(true)
            setError(null)
            console.log(authorization);
            try{
                let headersList = {
                    // "Accept": "*/*",
                    // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Authorization": `Bearer ${authorization}`
                   }
                   
                   let reqOptions = {
                     url: "https://kaaryar.hossein.codes/moodle/user/student/all?pageNum=1&pageSize=15",
                     method: "GET",
                     headers: headersList,
                   }
                   
                   let response = await axios.request(reqOptions);
                   setUesrlist(response.data);  
                   console.log(response.data);
            }catch (error){
                setError(error.message)
            }
            setLoading(false)
        };
        fetchUserList();
    },[])

    const  renderUserlist = () =>{
        
        if(!userlist){
            
            return null
        }
    
  return (
    <>
    <div className='list-user'>
    <button onClick={()=>navigate("/panel")}>برگشت</button>

        {userlist.map((user) =>(
            <div key={user.id} className='user'>
                <div className='name'>{user.username} {user.lastname}</div>
                <div className='email'>{user.email}</div>
                <Link to={`${user.id}`}><button className='button'>Click Me</button></Link>

            </div>
        ))}
    </div>
    </>
  )
}
return(
    <div>
        {
            renderUserlist()
        }
    </div>
)
}


export default Users
